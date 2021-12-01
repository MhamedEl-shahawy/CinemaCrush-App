import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import logo from "./components/images/logo.png"
import useFetchMovies from "./hooks/useFetchMovies";
import Navbar from "./components/Navbar";
import MoviesShow from "./components/MoviesShow";
import MoviePlayer from "./components/MoviePlayer"
import GlobalStyle from "./components/style/GlobalStyle.js";
import Footer from "./components/Footer";
function App() {

  const theme = {
     colors:{
       main:"#000",
       primary:"#fff",
       secondary:"#111"
     },
       mobile: '768px',
  }
  return (
       <Router>
       <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Navbar logo={logo} />
          <Routes>
          <Route path='/' element={<MoviesShow  movieType="https://api.themoviedb.org/3/movie/now_playing?page=5&api_key=986eb324dbd60d6f95d44380dfbe9ae7"/>}  exact />
          <Route path='/popular' element={<MoviesShow  titlePage="Popular Movies" movieType="https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&api_key=986eb324dbd60d6f95d44380dfbe9ae7"/>} />
          <Route path='/top' element={<MoviesShow titlePage="Top Rated Movies" movieType="https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=986eb324dbd60d6f95d44380dfbe9ae7"/>} />
          <Route path='/upcoming' element={<MoviesShow titlePage="Upcoming Movies" movieType="https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=986eb324dbd60d6f95d44380dfbe9ae7"/>} />
          <Route path='/movie/:id' element={<MoviePlayer />} />
          </Routes>
        <Footer logo={logo} />
          </ThemeProvider>

    </Router>
  );
}

export default App;
