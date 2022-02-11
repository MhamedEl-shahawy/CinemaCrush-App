import { useState, useEffect,useRef } from 'react';
import {Link, useParams,useLocation } from "react-router-dom"; 
import Loader from "./Loader";
import {MoviesContainer,Title,Movies,MovieContainer,Movie,MovieTitle,Img} from "./style/MoviesStyle";
import useFetchMovies from "../hooks/useFetchMovies";
import Spinner from "./Spinner";

function MoviesShow({movieType,titlePage,sort,loadMoreUrl,imageSetter}) {
    const { id } = useParams();
    const location = useLocation();
    const [movieUrl,setMovieUrl]=useState(movieType)
    const { error, isPending, data } = useFetchMovies(movieUrl);
    const [loadingFrame,setLoadingFrame] = useState(true);
    const [moreMovies,setMoreMovies] = useState([]);
    let [counter,setCounter] = useState(2);
     const imgRef = useRef(null);
    const onLoadFrame = ()=>{
      setLoadingFrame(false);
    }
    const loadMore = ()=>{
     
      fetch(loadMoreUrl+`${counter}`+`${sort? sort:""}`+"&api_key=986eb324dbd60d6f95d44380dfbe9ae7")
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(db => {
        const newLists = [...data,...moreMovies,...db.results];
        let newCounter = counter+1;
        
        setCounter(newCounter);

        let uniqueObjArray = [
          ...new Map(newLists.map((item) => [item["id"], item])).values(),
      ];
        setMoreMovies([...uniqueObjArray]);

    
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
   useEffect(()=>{
      setMoreMovies([])
   },[location]);
//    useEffect(()=>{
//    window.addEventListener('scroll', (event) => {
//      console.log( document.body.clientWidth);
//      console.log( window.pageYOffset);
//      if(window.pageYOffset === document.body.clientWidth){
     

//     loadMore()
//   }
// },[])
//   });
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

         {(moreMovies.length > 0 ? moreMovies:data).map( (movie,i) =>(
        
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
    
         


     <button onClick={()=>loadMore()}>Click heree</button>
     </MoviesContainer>
    </>
  }
         </>
  );
}

export default MoviesShow;
