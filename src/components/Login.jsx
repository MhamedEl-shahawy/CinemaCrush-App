import {useState,useEffect} from "react";
import {Container,Wrapper,Signup,Anotherauth,Forget,BtnWrapper,Img,Button,Form,Input,Label, LogoWrapper, Logo} from "./style/Login";
 import {Link,useNavigate} from "react-router-dom";
 import logo from "./images/favcon.png";
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { auth } from "./firebase-config";

import {useDispatch} from "react-redux";
import {getLoginToken} from "../features/auth"
 const Login = ({authrized})=>{
    const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const [token,setToken] = useState("");
   const navigate = useNavigate();
   const dispatch = useDispatch();
     const loginAuth = (e)=>{
        e.preventDefault();
        dispatch(getLoginToken({email:email,password:password})).then((db)=>{
          if(db.payload?.user["accessToken"] != null){
            toast.success("Login Successfuly");
            localStorage.setItem("cinemaCrush",JSON.stringify({token:db.payload?.user["accessToken"]})); 
              setTimeout(()=>{
                navigate("/");
              },3000);
         
         } else {
          localStorage.removeItem("cinemaCrush");
          toast.error("username or password not correct")

         }
        })
     };
 
    return (
        <>
            <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
        <Container>
            <Form>
            <LogoWrapper>
                <Logo>
                  <Img src={logo}/>
                </Logo>
            </LogoWrapper>
            <Wrapper>
                <Label htmlFor="email">email address</Label>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" />
            </Wrapper>
            <Wrapper>
                <Label htmlFor="password">password</Label>
                <Input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
            </Wrapper>
            <Wrapper>
              <Forget><Link to="/forgetpassword">Forget Password?</Link></Forget>
            </Wrapper>
            <Wrapper>
            <Button>
                <BtnWrapper onClick={(e)=>loginAuth(e)}>
                Login
                </BtnWrapper>
            </Button>
            </Wrapper>
            <Wrapper>
                <Anotherauth>
                    OR
                </Anotherauth>
            </Wrapper>
            <Wrapper>
              <Signup>Don't have an account yet? <Link to="/signup">Register</Link></Signup>
            </Wrapper>
            </Form>
        </Container>
        </>
    )
}

export default Login;