import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';
import {useState,useEffect} from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./components/style/GlobalStyle.js";
import {WrapperContainer} from "./components/style/WrapperContainer.js";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ContentRoutes  from './components/ContentRoutes.jsx';
function App() {
  const [image,setImage] = useState("");
  const {id} = useParams();
  const [auth,setAuth] = useState(JSON.parse(localStorage.getItem("cinema")) || {status:false,token:""});
  const [authWrap,setAuthWrap] = useState(false);
  const [test,setTest] = useState(false);

  const theme = {
     colors:{
       main:"#000",
       primary:"#fff",
       secondary:"#111",
       nav:"rgba(31, 38, 60,0.5)",
       nav2:"rgba(37, 37, 37,0.5)",
       bgHover:"rgba(0, 0, 0,1)",
       navColor:"#4C5764"
     },
     mobile: '768px',
  }
  const authrized = (status)=>{
    setTest(status)
  };
  useEffect(() => {
    let token = "";
    try{
       token= JSON.parse(localStorage.getItem("cinema"));
      setAuth(token);
    }catch(err){
      console.log(err);

    }

  }, [test]);
  return (
       <Router>
       <ThemeProvider theme={theme}>
        <GlobalStyle urlImage={image}/>
        <WrapperContainer>
          <Routes>
          <Route  exact path="/*"  element={<ContentRoutes auth={(auth !== null) ? auth.status:authWrap} />}/>
          <Route path='/login' element={<Login  authrized={(authSt)=> authrized(authSt)}/>}  />
          <Route path='/signup' element={<Signup/>} />

          </Routes>
  
        </WrapperContainer>
          </ThemeProvider>

    </Router>
  );
}

export default App;
