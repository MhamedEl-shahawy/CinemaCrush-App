import {useState,useEffect} from "react";
import { BrowserRouter as Router, Navigate,Routes, Route,useParams } from 'react-router-dom';
import { Container,WrapperRoutes,NavMob } from "./style/RoutesStyle";
import Navbar from "./Navbar";
import logo from "./images/logo.png"
import MoviesShow from "./MoviesShow";
import MoviePlayer from "./MoviePlayer"
import Artist from "./Artist";
import MoviesGenres from "./MoviesGenres";
import Footer from "./Footer";
import {useSelector,useDispatch} from "react-redux";
import {changeBar} from "../features/movies";
import {setToken} from "../features/auth";
function ContentRoutes() {
  const [image,setImage] = useState("");
  const imgUrl = useSelector((state)=> state.movies.img);
  const token = useSelector((state)=> state.auth.token);
  const dispatch = useDispatch();
  const {id} = useParams();



return  (JSON.parse(localStorage.getItem("cinemaCrush")) != null || token != null )? (<RouteComponent/>):(<Navigate to="/login" />);
  
function RouteComponent(){
  return (
    <Container>
     
    <Navbar logo={logo}  />
    <WrapperRoutes  urlImage={imgUrl} onClick={()=> dispatch(changeBar(false))}>
      <Routes>
      <Route path='/' element={<MoviesShow  imageSetter={(url) => setImage(url) }  loadMoreUrl="https://api.themoviedb.org/3/movie/now_playing?page="  movieType={`https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.REACT_APP_APIKEY}`} />}  exact />
      <Route path='/popular' element={<MoviesShow imageSetter={(url) => setImage(url) } loadMoreUrl="https://api.themoviedb.org/3/discover/movie?page="  sort="&sort_by=popularity.desc"  titlePage="Popular Movies" movieType={`https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&api_key=${process.env.REACT_APP_APIKEY}`}/>} />
      <Route path='/top' element={<MoviesShow  imageSetter={(url) => setImage(url) }  titlePage="Top Rated Movies" loadMoreUrl="https://api.themoviedb.org/3/movie/top_rated?page=1" movieType={`https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=${process.env.REACT_APP_APIKEY}`}/>} />
      <Route path='/upcoming' element={<MoviesShow   imageSetter={(url) => setImage(url) } titlePage="Upcoming Movies" loadMoreUrl="https://api.themoviedb.org/3/movie/upcoming?page=" movieType={`https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=${process.env.REACT_APP_APIKEY}`}/>} />
      <Route path='/movie/:id' element={<MoviePlayer  imageSetter={(url) => setImage(url) } />} />
      <Route path="artist/:id" element={<Artist imageSetter={(url) => setImage(url) }/>} /> 
      <Route path="/genres/:type/:id" element={<MoviesGenres  imageSetter={(url) => setImage(url) } />} /> 
      <Route path='*' element={<MoviesShow  imageSetter={(url) => setImage(url) }  loadMoreUrl="https://api.themoviedb.org/3/movie/now_playing?page="  movieType={`https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.REACT_APP_APIKEY}`}/>}   />

      </Routes>
    <Footer logo={logo} />
  </WrapperRoutes>
</Container>
  )
}
}
export default ContentRoutes;
