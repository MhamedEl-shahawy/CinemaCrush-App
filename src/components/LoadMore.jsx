import { useState, useEffect,useRef } from 'react';
import {Link, useParams } from "react-router-dom"; 
import Loader from "./Loader";
import {MoviesContainer,Title,Movies,MovieContainer,Movie,MovieTitle,Img} from "./style/MoviesStyle";
import useFetchMovies from "../hooks/useFetchMovies";
import Spinner from "./Spinner";

function LoadMore({movieType,titlePage,imageSetter}) {
    const { id } = useParams();
    const [movieUrl,setMovieUrl]=useState(movieType)
    const { error, isPending, data } = useFetchMovies(movieUrl);
    const [loadingFrame,setLoadingFrame] = useState(true);
     const imgRef = useRef(null);
    const onLoadFrame = ()=>{
      setLoadingFrame(false);
    }
    const LoadingMore = ()=>{
      fetch("")
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
       
    
    
      })
      .catch(err => {
        // auto catches network / connection error
      
      })
    };
  useEffect(()=>{
    if(id){
     setMovieUrl(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=986eb324dbd60d6f95d44380dfbe9ae7`);   
    }else{
       imageSetter("");
       setMovieUrl(movieType);
    }
  },[id,movieType])
    
  return (
    <>
    {isPending && <Loader/>}
    {!isPending &&
    <>
     <MoviesContainer>
         <div>
           <Title>{titlePage || "Box Office Movie"}</Title>
         </div>
   
         <Movies>

         {data.map( (movie,i) =>(
        
          <MovieContainer key={movie.id+i}>
            <Link to={`/movie/${movie.id}`}>
             <Movie>
               <MovieTitle>{movie.title  ? movie.title:movie.original_name}</MovieTitle>  
            </Movie>  
            {loadingFrame && <Spinner/>}
            {movie.poster_path?  <Img ref={imgRef}  onLoad={()=>onLoadFrame()} src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>:movie.backdrop_path?
                                  <Img ref={imgRef} onLoad={()=>onLoadFrame()} src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path}/>:  <Img ref={imgRef} onLoad={()=>onLoadFrame()} src="https://picsum.photos/500/745.jpg"/>
            }
              </Link>
         </MovieContainer> 
       
         ))}     
         </Movies>
    
         


     <button>Click heree</button>
     </MoviesContainer>
    </>
  }
         </>
  );
}

export default LoadMore;
