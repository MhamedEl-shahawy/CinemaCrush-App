import { useState, useEffect,useRef } from 'react';
import {MovieCard,Iframe,Title,Head,Genre,Container,Img,Description,FilmCast,Lists,List,MovieDescriptionTitle,Poster,VideoTrailer,VideoTrailerContainer,PosterImg,MovieDescription,CastNames,MovieDescriptionWrapper,FilmCastContainer,CastNamesWrapper} from "./style/MoviePlayerStyle";
import {Link,useParams} from "react-router-dom";
import MoviesShow from "./MoviesShow";
import Loader from "./Loader";
import useFetchMovies from "../hooks/useFetchMovies";
import useFetchCast from "../hooks/useFetchCast";
import useFetchVideos from "../hooks/useFetchVideos";
import Spinner from "./Spinner";
function MoviePlayer({imageSetter}){
  const {id} = useParams();

  const { error, isPending, dataMovie } = useFetchMovies(`https://api.themoviedb.org/3/movie/${id}?api_key=986eb324dbd60d6f95d44380dfbe9ae7&language=en-US`);
  const {  dataMovieCast } = useFetchCast(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=986eb324dbd60d6f95d44380dfbe9ae7&language=en-US`);
  const {  dataMovieTrailer } = useFetchVideos(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=986eb324dbd60d6f95d44380dfbe9ae7&language=en-US`);
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
  imageSetter("https://image.tmdb.org/t/p/w500"+(dataMovie.poster_path? dataMovie.poster_path:dataMovie.backdrop_path))

});
 useEffect(()=>{
  if(id){
    imageSetter("https://image.tmdb.org/t/p/original"+(dataMovie.poster_path? dataMovie.poster_path:dataMovie.backdrop_path));
    }
  },[id])
  return(
    <>
     {isPending && <Loader/>}
     {!isPending &&
         <>           
           <Poster show={poster} onClick={()=> close()}>
            <PosterImg  src={"https://image.tmdb.org/t/p/w400"+(dataMovie.poster_path? dataMovie.poster_path:dataMovie.backdrop_path)}/>
           </Poster>
           <VideoTrailer show={show} onClick={(e)=> close(e)}>
           
           {dataMovieTrailer.length !== 0 ? 
            <VideoTrailerContainer>
            {loadingFrame && <Spinner/>}
            <Iframe ref={iframeRef} onLoad={()=>onLoadFrame()} src={"https://www.youtube.com/embed/"+dataMovieTrailer[0].key} title={dataMovie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
            </VideoTrailerContainer>
            :
            <VideoTrailerContainer>
            <Spinner/>
            </VideoTrailerContainer>

          }
       
           </VideoTrailer>
            <MovieCard key={dataMovie.id}>
          
              <Head>
                <Title>{dataMovie.title}</Title>  
              </Head>
              <Container>
                 <Img  src={"https://image.tmdb.org/t/p/w500"+(dataMovie.poster_path? dataMovie.poster_path:dataMovie.backdrop_path)} />
                 <Description>
                   <FilmCastContainer>
                     <FilmCast>
                       <Lists>
                         <List><span>IMDB Rating</span> : {dataMovie.vote_average}</List>
                         <List><span>Release</span> :  {dataMovie.release_date}</List>
                         <List>
                         <span>Genres</span> : 
                          {((dataMovie.genres || []).length !== 0) ?  dataMovie.genres.map((db,i)=>(
                            <Genre>
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
                         <List><span>Runtime</span> :  {runtimeConverter(dataMovie.runtime)}</List>
                         <List><span onClick={()=> setShow(true)} className='white'>Play Trailer</span> - <span className='white' onClick={()=> setPoster(true)}>Poster</span> </List>
                       </Lists> 
                     </FilmCast>
                     </FilmCastContainer>
                       <MovieDescriptionWrapper>
                 <MovieDescriptionTitle>Cast</MovieDescriptionTitle>
                 <CastNamesWrapper>
                 {dataMovieCast.map( cast => (
                   <CastNames><Link to={"/artist/"+cast.id}>{cast.name}, </Link></CastNames>

                 ))}
                 </CastNamesWrapper> 
                 <MovieDescriptionTitle>{dataMovie.title}</MovieDescriptionTitle>
                 <MovieDescription>
                  {dataMovie.overview}
                 </MovieDescription>
              </MovieDescriptionWrapper> 
                 </Description>
              </Container>
            
            </MovieCard> 
            <MoviesShow   titlePage={dataMovie.title}  />
       
         </>
        }
         </>
  	)
}

export default MoviePlayer;