import { useState, useEffect,useRef } from 'react';
import {Link, useParams,useLocation } from "react-router-dom"; 
import Loader from "./Loader";
import {MoviesContainer,Title,Movies,MovieContainer,BtnContainer,Button,Movie,MovieTitle,Img} from "./style/MoviesStyle";
import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/movies";

function MoviesShow({movieType,titlePage,sort,loadMoreUrl,imageSetter}) {
  const dispatch = useDispatch();
  const movies = useSelector((state)=> state.movies.data);
  const status = useSelector((state)=> state.movies.status);

    const { id } = useParams();
    const location = useLocation();
    const [movieUrl,setMovieUrl]=useState(movieType)
    const [loadingFrame,setLoadingFrame] = useState(true);
    const [moreMovies,setMoreMovies] = useState([]);
    let [counter,setCounter] = useState(2);
     const imgRef = useRef(null);
     const re = useRef(0);

    const onLoadFrame = ()=>{
      setLoadingFrame(false);
    }
    useEffect(() => {
      dispatch(getMovies(movieType))
    }, [dispatch]);
    const loadMore = ()=>{
     
      fetch(loadMoreUrl+`${counter}`+`${sort? sort:""}`+"&api_key="+process.env.REACT_APP_APIKEY)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(db => {
        const newLists = [...movies.results,...moreMovies,...db.results];
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
     setMovieUrl(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_APIKEY}`);  
     dispatch(getMovies(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_APIKEY}`));

    }else{
       imageSetter("");
       setMovieUrl(movieType);
      dispatch(getMovies(movieType));

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
    {status === "loading" && <Loader/>}
    {status === "success" &&
    <>
     <MoviesContainer>
         <div>
           <Title>{titlePage || "Box Office Movie"}</Title>
         </div>
   
         <Movies>

         {(movies || moreMovies.length > 0)  && (moreMovies.length > 0 ? moreMovies:movies.results).map( (movie,i) =>(
        
          <MovieContainer key={movie.title+i}>
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
    
         

      <BtnContainer>
     <Button onClick={()=>loadMore()}>Loading More</Button>
     </BtnContainer>
     </MoviesContainer>
    </>
  }
         </>
  );
}

export default MoviesShow;
