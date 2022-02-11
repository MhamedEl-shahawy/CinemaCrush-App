import {Link,useParams } from "react-router-dom"; 
import { useState, useEffect } from 'react';
import Loader from "./Loader";

import {MoviesContainer,Title,Movies,MovieContainer,Movie,MovieTitle,Img} from "./style/MoviesStyle";
import useFetchMovies from "../hooks/useFetchMovies";
function MoviesGenres({titlePage,imageSetter}) {
    const { id,type } = useParams();
    const [moreMovies,setMoreMovies] = useState([]);
    let [counter,setCounter] = useState(1);
    const { error, isPending, data } = useFetchMovies(`https://api.themoviedb.org/3/discover/movie?page=1&api_key=986eb324dbd60d6f95d44380dfbe9ae7&with_genres=${id}`);
    const loadMore = ()=>{
      fetch(`https://api.themoviedb.org/3/discover/movie?page=${counter}&api_key=986eb324dbd60d6f95d44380dfbe9ae7&with_genres=${id}`)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(db => {
        console.log(db);
        const newLists = [...data,...moreMovies,...db.results];
        let newCounter = counter+1;
        
        setCounter(newCounter);

        let uniqueObjArray = [
          ...new Map(newLists.map((item) => [item["id"], item])).values(),
      ];
        setMoreMovies([...uniqueObjArray]);
        console.log(uniqueObjArray);
        console.log(newCounter);

    
      })
      .catch(err => {
        // auto catches network / connection error
       
      })
    };
    useEffect(()=>{
		imageSetter("")
    },[titlePage]);
  return (
    <>
    {isPending && <Loader/>}
   {!isPending && 
    <>
     <MoviesContainer>
         <div>
           <Title>{"Top Rated Of "+type+" Movies" || "Box Office Movie"}</Title>
         </div>
   
         <Movies>

         {(moreMovies.length > 0 ? moreMovies:data).map( movie =>(
        
          <MovieContainer key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
             <Movie>
               <MovieTitle>{movie.title}</MovieTitle>  
            </Movie>  
            <Img src={"https://image.tmdb.org/t/p/w500"+(movie.poster_path? movie.poster_path:movie.backdrop_path)}/> 
              </Link>
         </MovieContainer> 
       
         ))}     
         </Movies>
    
         


         <button onClick={()=>loadMore()}>Click heree</button>

     </MoviesContainer>
    </>
   }
  </>
  );
}

export default MoviesGenres;