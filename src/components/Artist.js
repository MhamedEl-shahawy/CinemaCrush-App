import {MovieCard,Title,Head,Container,Img,Description,FilmCast,Lists,List,MovieDescriptionTitle,MovieDescription,CastNames,MovieDescriptionWrapper,FilmCastContainer,CastNamesWrapper} from "./style/MoviePlayerStyle";
import {useParams} from "react-router-dom";
import MoviesShow from "./MoviesShow";
import {useEffect } from 'react';
import useFetchMovies from "../hooks/useFetchMovies";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./Loader";

import { getMovieInfo } from "../features/moviesInfo";
function Artist({imageSetter}){
  const {id} = useParams();
  const { error, isPending, dataMovie } = useFetchMovies(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.apikey}&language=en-US`);
  const dispatch = useDispatch();
  const movies = useSelector((state)=> state.moviesInfo.data);
  const status = useSelector((state)=> state.moviesInfo.statusInfo);
  
  const runtimeConverter =  (minutes) => {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  h = h < 10 ?  h  : h; 
  m = m < 10 ?  m  :  m; 
  return h +"h "+ m+"m";
};

imageSetter("https://image.tmdb.org/t/p/original"+movies.profile_path);
useEffect(() => {
  dispatch(getMovieInfo(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`))
}, [dispatch]);
 useEffect(()=>{
    if(id){
    imageSetter("https://image.tmdb.org/t/p/original"+movies.profile_path);
    }
  },[id])
  return(
    <>
    {status === "loading" && <Loader/>}
  {status === "success" &&
       
         <>           

            <MovieCard>
          
              <Head>
                <Title>{movies.name}</Title>  
              </Head>
              <Container>
                 <Img src={"https://image.tmdb.org/t/p/original"+movies.profile_path} />
                 <Description>
                   <FilmCastContainer>
                     <FilmCast>
                       <Lists>
                         <List><span>Birthdate</span> : {movies.birthday}</List>
                         <List><span>Art Type</span> :  {movies.known_for_department}</List>
                       </Lists>
                          <Lists>
                       </Lists>
                     </FilmCast>
                     </FilmCastContainer>
                       <MovieDescriptionWrapper>
                 <MovieDescriptionTitle>Bio</MovieDescriptionTitle>
               
                 <MovieDescription>{movies.biography}</MovieDescription>
                
              </MovieDescriptionWrapper> 
                 </Description>
              </Container>
            </MovieCard> 
            {/* <MoviesShow   titlePage={"All Movies To "+movies.name} movieType={"https://api.themoviedb.org/3/person/"+id+`/combined_credits?api_key=${process.env.REACT_APP_APIKEY}`} /> */}
       
         </>
  	    }
         </>
  	)
}

export default Artist;