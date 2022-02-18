import { useState, useEffect,useRef } from 'react';
import {MovieCard,Iframe,Title,Head,Genre,Container,MovieCardWrapper,Img,Description,FilmCast,Lists,List,MovieDescriptionTitle,Poster,VideoTrailer,VideoTrailerContainer,PosterImg,MovieDescription,CastNames,MovieDescriptionWrapper,FilmCastContainer,CastNamesWrapper} from "./style/MoviePlayerStyle";
import {BookMarkWrapper} from "./style/MoviesStyle";

import Reviews from "./Reviews";
import {Link,useParams} from "react-router-dom";
import MoviesShow from "./MoviesShow";
import Loader from "./Loader";
import useFetchCast from "../hooks/useFetchCast";
import useFetchVideos from "../hooks/useFetchVideos";
import { useSelector, useDispatch } from "react-redux";
import { getMovieInfo } from "../features/moviesInfo";
import { FaPlus } from "react-icons/fa";

import Spinner from "./Spinner";
function MoviePlayer({imageSetter}){
  const {id} = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state)=> state.moviesInfo.data);
  const status = useSelector((state)=> state.moviesInfo.statusInfo);
  const {  dataMovieCast } = useFetchCast(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`);
  const {  dataMovieTrailer } = useFetchVideos(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`);
  const [show,setShow] = useState(false);
  const [poster,setPoster] = useState(false);
  const [loadingFrame,setLoadingFrame] = useState(true)
  const iframeRef = useRef(null);
  const runtimeConverter =  (minutes) => {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  h = h < 10 ?  h  : h; 
  m = m < 10 ?  m  :  m; 
  return h +"h "+ m+"m";
};

const close = (e)=>{
  const src = iframeRef.current.src;
   setShow(false);
   setPoster(false);   
   iframeRef.current.src = src;
   setLoadingFrame(true);
};
const onLoadFrame = ()=>{
  setLoadingFrame(false);
}
useEffect(()=>{
  imageSetter("https://image.tmdb.org/t/p/w500"+(movies.poster_path? movies.poster_path:movies.backdrop_path))

});
 useEffect(()=>{
  if(id){
    dispatch(getMovieInfo(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`))

    imageSetter("https://image.tmdb.org/t/p/original"+(movies.poster_path? movies.poster_path:movies.backdrop_path));
    }
  },[id]);
  useEffect(() => {
    dispatch(getMovieInfo(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`))
  }, []);
  return(
    <>
      {status === "loading" && <Loader/>}
    {status === "success" &&
         <>           
           <Poster show={poster} onClick={()=> close()}>
            <PosterImg  src={"https://image.tmdb.org/t/p/w400"+(movies.poster_path? movies.poster_path:movies.backdrop_path)}/>
           </Poster>
           <VideoTrailer show={show} onClick={(e)=> close(e)}>
           
           {dataMovieTrailer.length !== 0 ? 
            <VideoTrailerContainer>
            {loadingFrame && <Spinner/>}
            <Iframe ref={iframeRef} onLoad={()=>onLoadFrame()} src={"https://www.youtube.com/embed/"+dataMovieTrailer[0].key} title={movies.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            </VideoTrailerContainer>
            :
            <VideoTrailerContainer>
            <Spinner/>
            </VideoTrailerContainer>

          }
       
           </VideoTrailer>
            <MovieCard key={movies.id}>
           <MovieCardWrapper>
              <Head>
                <Title>{movies.title}</Title> 
                <BookMarkWrapper className="bookPlayer">
                <FaPlus/>
              </BookMarkWrapper> 
              </Head>
              <Container>
                 <Img  src={"https://image.tmdb.org/t/p/w500"+(movies.poster_path? movies.poster_path:movies.backdrop_path)} />
                 <Description>
                   <FilmCastContainer>
                     <FilmCast>
                       <Lists>
                         <List><span>IMDB Rating</span> : {movies.vote_average}</List>
                         <List><span>Release</span> :  {movies.release_date}</List>
                         <List>
                         <span>Genres</span> : 
                          {((movies.genres || []).length !== 0) ?  movies.genres.map((db,i)=>(
                            <Genre key={db.name}>
                            <Link to={"/genres/"+db.name+"/"+db.id} key={db.id}>
                             {db.name}  
                            </Link>
                            </Genre>
                            ))
                          :
                          "" 
                          }
                          </List>

                       </Lists>
                          <Lists>
                         <List><span>Runtime</span> :  {runtimeConverter(movies.runtime)}</List>
                         <List><span onClick={()=> setShow(true)} className='white'>Play Trailer</span> - <span className='white' onClick={()=> setPoster(true)}>Poster</span> </List>
                       </Lists> 
                     </FilmCast>
                     </FilmCastContainer>
                       <MovieDescriptionWrapper>
                 <MovieDescriptionTitle>Cast</MovieDescriptionTitle>
                 <CastNamesWrapper>
                 {dataMovieCast.slice(0,10).map( (cast,i) => (
                   <CastNames key={cast.id}><Link to={"/artist/"+cast.id}  key={cast.name}>{cast.name}, </Link></CastNames>

                 ))}
                 </CastNamesWrapper> 
                 <MovieDescriptionTitle>{movies.title}</MovieDescriptionTitle>
                 <MovieDescription>
                  {movies.overview}
                 </MovieDescription>
              </MovieDescriptionWrapper> 
                 </Description>
              </Container>
              </MovieCardWrapper>  
            </MovieCard> 
            <Reviews movieName={movies.title}/>
            <MoviesShow  movieType={`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_APIKEY}`} loadMoreUrl={`https://api.themoviedb.org/3/movie/${id}/recommendations?page=`}  titlePage={"Related Movies: "+movies.title}  />
       
         </>
        }
         </>
  	)
}

export default MoviePlayer;