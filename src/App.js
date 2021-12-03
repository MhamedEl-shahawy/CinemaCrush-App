import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import logo from "./components/images/logo.png"
import useFetchMovies from "./hooks/useFetchMovies";
import Navbar from "./components/Navbar";
import MoviesShow from "./components/MoviesShow";
import MoviePlayer from "./components/MoviePlayer"
import GlobalStyle from "./components/style/GlobalStyle.js";
import {WrapperContainer} from "./components/style/WrapperContainer.js";
import Artist from "./components/Artist";
import MoviesGenres from "./components/MoviesGenres";
import Footer from "./components/Footer";
function App() {
  const [image,setImage] = useState("");
  const {id} = useParams(); 
  const theme = {
     colors:{
       main:"#000",
       primary:"#fff",
       secondary:"#111",
     },
     mobile: '768px',
  }
  return (
       <Router>
       <ThemeProvider theme={theme}>
        <GlobalStyle urlImage={image}/>
        <Navbar logo={logo} id={id} />
        <WrapperContainer>
          <Routes>
          <Route path='/' element={<MoviesShow  imageSetter={(url) => setImage(url) }   movieType="https://api.themoviedb.org/3/movie/now_playing?page=5&api_key=986eb324dbd60d6f95d44380dfbe9ae7"/>}  exact />
          <Route path='/popular' element={<MoviesShow imageSetter={(url) => setImage(url) }   titlePage="Popular Movies" movieType="https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&api_key=986eb324dbd60d6f95d44380dfbe9ae7"/>} />
          <Route path='/top' element={<MoviesShow  imageSetter={(url) => setImage(url) }  titlePage="Top Rated Movies" movieType="https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=986eb324dbd60d6f95d44380dfbe9ae7"/>} />
          <Route path='/upcoming' element={<MoviesShow   imageSetter={(url) => setImage(url) } titlePage="Upcoming Movies" movieType="https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=986eb324dbd60d6f95d44380dfbe9ae7"/>} />
          <Route path='/movie/:id' element={<MoviePlayer imageSetter={(url) => setImage(url) } />} />
          <Route path="artist/:id" element={<Artist imageSetter={(url) => setImage(url) }/>} /> 
          <Route path="/genres/:id" element={<MoviesGenres imageSetter={(url) => setImage(url) } />} /> 

          </Routes>
        <Footer logo={logo} />
        </WrapperContainer>
          </ThemeProvider>

    </Router>
  );
}

export default App;
