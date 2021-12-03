import {Link,useHistory, useParams } from "react-router-dom"; 
import { useState, useEffect } from 'react';

import {MoviesContainer,Title,Movies,MovieContainer,Movie,MovieTitle,Img} from "./style/MoviesStyle";
import useFetchMovies from "../hooks/useFetchMovies";
function MoviesGenres({titlePage,imageSetter}) {
    const { id } = useParams();
    const { error, isPending, data } = useFetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=986eb324dbd60d6f95d44380dfbe9ae7&with_genres=${id}`);
    useEffect(()=>{
		imageSetter("")
    },[titlePage]);
  return (
   
    <>
     <MoviesContainer>
         <div>
           <Title>{"Top Rated "+titlePage+"Movies" || "Box Office Movie"}</Title>
         </div>
   
         <Movies>

         {data.map( movie =>(
        
          <MovieContainer key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
             <Movie>
               <MovieTitle>{movie.title}</MovieTitle>  
            </Movie>  
            <Img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/> 
              </Link>
         </MovieContainer> 
       
         ))}     
         </Movies>
    
         



     </MoviesContainer>
    </>
  
  );
}

export default MoviesGenres;