import {Link,useParams } from "react-router-dom"; 
import { useState, useEffect } from 'react';
import Loader from "./Loader";
import { useSelector, useDispatch } from "react-redux";
import { getMovies,changeUrl } from "../features/movies";
import {MoviesContainer,Title,Movies,MovieContainer,Movie,BtnContainer,Button,MovieTitle,Img} from "./style/MoviesStyle";
import {BookMarkWrapper} from "./style/MoviesStyle";
import { FaPlus } from "react-icons/fa";

function MoviesGenres({titlePage,imageSetter}) {
    const { id,type } = useParams();
    const dispatch = useDispatch();
  const movies = useSelector((state)=> state.movies.data);
  const status = useSelector((state)=> state.movies.status);
    const [moreMovies,setMoreMovies] = useState([]);
    let [counter,setCounter] = useState(1);
    const loadMore = ()=>{
      fetch(`https://api.themoviedb.org/3/discover/movie?page=${counter}&api_key=${process.env.REACT_APP_APIKEY}&with_genres=${id}`)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(db => {
        const newLists = [...movies,...moreMovies,...db.results];
        let newCounter = counter+1;
        
        setCounter(newCounter);

        let uniqueObjArray = [
          ...new Map(newLists.map((item) => [item["id"], item])).values(),
      ];
        setMoreMovies([...uniqueObjArray]);
   

    
      })
      .catch(err => {

         console.error(err.message)
      })
    };
    useEffect(() => {
      dispatch(getMovies(`https://api.themoviedb.org/3/discover/movie?page=1&api_key=${process.env.REACT_APP_APIKEY}&with_genres=${id}`));
      dispatch(changeUrl(""))

    }, []);
  return (
    <>
    {status === "load" && <Loader/>}
   {status === "success" && 
    <>
     <MoviesContainer>
         <div>
           <Title>{"Top Rated Of "+type+" Movies"}</Title>
         </div>
  
         <Movies>

         {(movies || moreMovies.length > 0) && (moreMovies.length > 0 ? moreMovies:movies).map( (movie,i) =>(
        
          <MovieContainer key={movie.title+i}>
          <BookMarkWrapper className="bookPlayer">
                <FaPlus/>
              </BookMarkWrapper> 
            <Link to={`/movie/${movie.id}`}>
             <Movie>
               <MovieTitle>{movie.title}</MovieTitle>  
            </Movie>  
            <Img src={"https://image.tmdb.org/t/p/w500"+(movie.poster_path? movie.poster_path:movie.backdrop_path)}/> 
              </Link>
         </MovieContainer> 
       
         ))}     
         </Movies>
    
         

  {(movies || moreMovies.length > 0 )&&
         <BtnContainer onClick={()=>loadMore()}>
     <Button >Loading More</Button>
     </BtnContainer>
  }
     </MoviesContainer>
    </>
   }
  </>
  );
}

export default MoviesGenres;