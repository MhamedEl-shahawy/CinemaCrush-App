import {MovieCard,Title,Head,Container,Img,Description,FilmCast,Lists,List,MovieDescriptionTitle,MovieDescription,CastNames,MovieDescriptionWrapper,FilmCastContainer,CastNamesWrapper} from "./style/MoviePlayerStyle";
import ven from "./images/ven.jpeg";
import {Link} from "react-router-dom";
import MoviesShow from "./MoviesShow";


function MoviePlayer(){
  return(

         <>
            <MovieCard>
              <Head>
                <Title>Venom: Let There Be Carnage (2021)</Title>  
              </Head>
              <Container>
                 <Img src={ven} />
                 <Description>
                   <FilmCastContainer>
                     <FilmCast>
                       <Lists>
                         <List><span>Director</span> : <Link to="/artist"> Cathy Yan</Link></List>
                         <List><span>Writer</span> :  <Link to="/artist"> Cathy Yan</Link></List>
                         <List><span>Release</span> :  Cathy Yan</List>
                       </Lists>
                          <Lists>
                         <List><span>Geners</span> :  <Link to="/artist"> Cathy Yan</Link></List>
                         <List><span>Runtime</span> :  Cathy Yan</List>
                         <List><span>Play Trailer</span> - <Link to="/artist">Poster</Link> </List>
                       </Lists>
                     </FilmCast>
                     </FilmCastContainer>
                       <MovieDescriptionWrapper>
                 <MovieDescriptionTitle>Cast</MovieDescriptionTitle>
                 <CastNamesWrapper>
                   <CastNames><Link to="/artist">Mohamed,</Link></CastNames>
                   <CastNames><Link to="/artist">Mohamed,</Link></CastNames>
                   <CastNames><Link to="/artist">Mohamed,</Link></CastNames>
                   <CastNames><Link to="/artist">Mohamed,</Link></CastNames>
                 </CastNamesWrapper> 
                 <MovieDescriptionTitle>Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn) Synopsis</MovieDescriptionTitle>
                 <MovieDescription>
                   Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.
                 </MovieDescription>
              </MovieDescriptionWrapper> 
                 </Description>
              </Container>
            
            </MovieCard> 
            <MoviesShow   titlePage="Venom: Let There Be Carnage (2021)" movieType="/now_playing?page=1" />
         </>
  	)
}

export default MoviePlayer;