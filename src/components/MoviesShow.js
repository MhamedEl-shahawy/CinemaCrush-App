import {Link,useHistory, useParams } from "react-router-dom"; 
import { useState, useEffect } from 'react';

import {MoviesContainer,Title,Movies,MovieContainer,Movie,MovieTitle,Img} from "./style/MoviesStyle";
import useFetchMovies from "../hooks/useFetchMovies";
function MoviesShow({movieType,titlePage}) {
    const { id } = useParams();
    const [movieUrl,setMovieUrl]=useState(movieType)
    const { error, isPending, data } = useFetchMovies(movieUrl);
  useEffect(()=>{
    if(id){
     setMovieUrl(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=400225a1886f38d9cf3c934d6a756c4d`);   
     console.log(id);
    }else{
     console.log(id);

       setMovieUrl(movieType);
    }
  },[id,movieType])
    

  return (
   
    <>
     <MoviesContainer>
         <div>
           <Title>{titlePage || "Box Office Movie"}</Title>
         </div>
   
         <Movies>

         {data.map( movie =>(
        
          <MovieContainer key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
             <Movie>
               <MovieTitle>{movie.title}</MovieTitle>  
            </Movie>  
            <Img src={"https://image.tmdb.org/t/p/original"+movie.poster_path}/> 
              </Link>
         </MovieContainer> 
       
         ))}     
         </Movies>
    
         



     </MoviesContainer>
    </>
  
  );
}

export default MoviesShow;
