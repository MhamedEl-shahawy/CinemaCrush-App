import {MovieCard,Title,Head,Container,Img,Description,FilmCast,Lists,List,MovieDescriptionTitle,Poster,VideoTrailer,VideoTrailerContainer,PosterImg,MovieDescription,CastNames,MovieDescriptionWrapper,FilmCastContainer,CastNamesWrapper} from "./style/MoviePlayerStyle";
import ven from "./images/ven.jpeg";
import {Link,useParams} from "react-router-dom";
import MoviesShow from "./MoviesShow";
import { useState, useEffect } from 'react';
import useFetchMovies from "../hooks/useFetchMovies";
import useFetchCast from "../hooks/useFetchCast";
import useFetchVideos from "../hooks/useFetchVideos";
function MoviePlayer({imageSetter}){
  const {id} = useParams();

  const { error, isPending, dataMovie } = useFetchMovies(`https://api.themoviedb.org/3/movie/${id}?api_key=986eb324dbd60d6f95d44380dfbe9ae7&language=en-US`);
  const {  dataMovieCast } = useFetchCast(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=986eb324dbd60d6f95d44380dfbe9ae7&language=en-US`);
  const {  dataMovieTrailer } = useFetchVideos(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=986eb324dbd60d6f95d44380dfbe9ae7&language=en-US`);
  const [genres,setGenres] = useState([dataMovie.genres])
  const runtimeConverter =  (minutes) => {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  h = h < 10 ?  h  : h; 
  m = m < 10 ?  m  :  m; 
  return h +"h "+ m+"m";
};


imageSetter("https://image.tmdb.org/t/p/original"+dataMovie.poster_path)
 useEffect(()=>{
    if(id){
    imageSetter("https://image.tmdb.org/t/p/original"+dataMovie.poster_path);
    }
  },[id])
  return(

         <>           
           <Poster>
            <PosterImg src={"https://image.tmdb.org/t/p/w400"+dataMovie.poster_path}/>
           </Poster>
           <VideoTrailer>
            <VideoTrailerContainer>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+"6JnN1DmbqoU"} title={dataMovie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </VideoTrailerContainer>
           </VideoTrailer>
            <MovieCard>
          
              <Head>
                <Title>{dataMovie.title}</Title>  
              </Head>
              <Container>
                 <Img src={"https://image.tmdb.org/t/p/w500"+dataMovie.poster_path} />
                 <Description>
                   <FilmCastContainer>
                     <FilmCast>
                       <Lists>
                         <List><span>IMDB Rating</span> : {dataMovie.vote_average}</List>
                         <List><span>Release</span> :  {dataMovie.release_date}</List>
                         <List><span>Genres</span> :  <Link to="/genres/">.......</Link></List>

                       </Lists>
                          <Lists>
                         <List><span>Runtime</span> :  {runtimeConverter(dataMovie.runtime)}</List>
                         <List><span>Play Trailer</span> - <Link to="/artist">Poster</Link> </List>
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
  	)
}

export default MoviePlayer;