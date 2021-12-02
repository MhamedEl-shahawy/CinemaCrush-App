import {Link,useHistory, useParams } from "react-router-dom"; 
import { useState, useEffect } from 'react';

import {MoviesContainer,Title,Movies,MovieContainer,Movie,MovieTitle,Img} from "./style/MoviesStyle";
import useFetchMovies from "../hooks/useFetchMovies";
function MoviesShow({movieType,titlePage,imageSetter}) {
    const { id } = useParams();
    const [movieUrl,setMovieUrl]=useState(movieType)
    const { error, isPending, data } = useFetchMovies(movieUrl);

  useEffect(()=>{
    if(id){
     setMovieUrl(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=986eb324dbd60d6f95d44380dfbe9ae7`);   
     console.log(id);
    }else{
       imageSetter("");
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
            <Img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/> 
              </Link>
         </MovieContainer> 
       
         ))}     
         </Movies>
    
         



     </MoviesContainer>
    </>
  
  );
}

export default MoviesShow;
