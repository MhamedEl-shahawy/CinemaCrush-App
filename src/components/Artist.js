import {MovieCard,Title,Head,Container,Img,Description,FilmCast,Lists,List,MovieDescriptionTitle,MovieDescription,CastNames,MovieDescriptionWrapper,FilmCastContainer,CastNamesWrapper} from "./style/MoviePlayerStyle";
import ven from "./images/ven.jpeg";
import {Link,useParams} from "react-router-dom";
import MoviesShow from "./MoviesShow";
import { useState, useEffect } from 'react';
import useFetchMovies from "../hooks/useFetchMovies";
function Artist({imageSetter}){
  const {id} = useParams();
  const { error, isPending, dataMovie } = useFetchMovies(`https://api.themoviedb.org/3/person/${id}?api_key=986eb324dbd60d6f95d44380dfbe9ae7&language=en-US`);

  
  const runtimeConverter =  (minutes) => {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  h = h < 10 ?  h  : h; 
  m = m < 10 ?  m  :  m; 
  return h +"h "+ m+"m";
};


imageSetter("https://image.tmdb.org/t/p/original"+dataMovie.profile_path)
 useEffect(()=>{
    if(id){
    imageSetter("https://image.tmdb.org/t/p/original"+dataMovie.profile_path);
    }
  },[id])
  return(

         <>           

            <MovieCard>
          
              <Head>
                <Title>{dataMovie.name}</Title>  
              </Head>
              <Container>
                 <Img src={"https://image.tmdb.org/t/p/original"+dataMovie.profile_path} />
                 <Description>
                   <FilmCastContainer>
                     <FilmCast>
                       <Lists>
                         <List><span>Birthdate</span> : {dataMovie.birthday}</List>
                         <List><span>Release</span> :  {dataMovie.known_for_department}</List>
                       </Lists>
                          <Lists>
                       </Lists>
                     </FilmCast>
                     </FilmCastContainer>
                       <MovieDescriptionWrapper>
                 <MovieDescriptionTitle>Bio</MovieDescriptionTitle>
               
                 <MovieDescriptionTitle>{dataMovie.biography}</MovieDescriptionTitle>
                 <MovieDescription>
                  {dataMovie.overview}
                 </MovieDescription>
              </MovieDescriptionWrapper> 
                 </Description>
              </Container>
            </MovieCard> 
            <MoviesShow   titlePage={"All Movies To "+dataMovie.name} movieType={"https://api.themoviedb.org/3/person/"+id+"/combined_credits?api_key=986eb324dbd60d6f95d44380dfbe9ae7"} />
       
         </>
  	)
}

export default Artist;