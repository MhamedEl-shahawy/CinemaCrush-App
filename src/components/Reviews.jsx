import {useEffect } from 'react';
import {useParams } from "react-router-dom"; 
import {ReviewsContainer,ReviewsLists,ReviewContent,ListsItem,ListsItemTitle,ListsItemP,DateWrapper} from "./style/ReviewsStyle";
import {Title} from "./style/MoviesStyle"
import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getMovieReviews } from "../features/movies";
import Moment from 'react-moment';
import Avatar,{getRandomColor} from 'react-avatar';

function Reviews({movieName}) {
  const dispatch = useDispatch();
  const movies = useSelector((state)=> state.movies.reviews);
  const status = useSelector((state)=> state.movies.reviewsStatus);
  const customColors = [
    '#5E005E',
    '#AB2F52',
    
    '#E88554',
    
    '#82CCD9',
    '#FFCC6B',
    
    '#7D323B',
    
  ];
    const { id } = useParams();
    useEffect(() => {
        dispatch(getMovieReviews(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`));
    }, []);
  useEffect(()=>{
    if(id){
     dispatch(getMovieReviews(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`));
    }else{
        dispatch(getMovieReviews(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`));
    }
  },[id]);
console.log(movies)
  return (

         <ReviewsContainer>

    {status === "loading" && <Spinner/>}
    {status === "success" && movies.length > 0 &&
    <>
         <div>
           <Title>{"Movie Reviews: "+movieName}</Title>
         </div>
   
       
         <ReviewsLists>
         {movies&& movies.slice(0,3).map( (movie,i) => {

        return(
          <ListsItem>
         
              <Avatar name={movie.author} round={10} textSizeRatio={2} color={getRandomColor(movie.author , customColors)}/>

              <ReviewContent>
              <ListsItemTitle href={movie.url} target="_blank">
              {movie.author}
              <DateWrapper>
              
              <Moment date={movie.created_at} />

              </DateWrapper>
              </ListsItemTitle>
              <ListsItemP>
              {movie.content}
              </ListsItemP>
              </ReviewContent>
          </ListsItem>    
       
         )})}     
         </ReviewsLists>
    </>
  }
  </ReviewsContainer>

  );
}

export default Reviews;
