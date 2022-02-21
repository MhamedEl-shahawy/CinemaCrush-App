import {useState} from 'react';
import {Container,Wrapper,Login,Anotherauth,Img,BtnWrapper,Button,Form,Input,Label, LogoWrapper, Logo} from "./style/Login";
import {Link,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "./images/favcon.png";
import {newUser} from "../features/auth";
import {useDispatch} from "react-redux";
const Signup = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const register = (e)=>{
      e.preventDefault();
      dispatch(newUser({email:email,password:password})).then((db)=>{
        if(db.payload?.user["accessToken"] != null){
          toast.success("Login Successfuly");

          setTimeout(()=>{
            navigate("/login");
          },1000);
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
               <Logo><Img src={logo}/></Logo>
           </LogoWrapper>
           <Wrapper>
               <Label htmlFor="name">Name</Label>
               <Input type="text" id="name" name="name"  onChange={(e)=> setName(e.target.value)}/>
           </Wrapper>
           <Wrapper>
               <Label htmlFor="email">email address</Label>
               <Input type="email" id="email" onChange={(e)=> setEmail(e.target.value)} name="email" />
           </Wrapper>
           <Wrapper>
               <Label htmlFor="password">password</Label>
               <Input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} name="password" />
           </Wrapper>
           <Wrapper>
               <Label htmlFor="password">Confirm password</Label>
               <Input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} id="password2" name="password" />
           </Wrapper>
           <Wrapper>
           <Button>
               <BtnWrapper onClick={(e)=>register(e)}>
               Register
               </BtnWrapper>
           </Button>
           </Wrapper>
           <Wrapper>
               <Anotherauth>
                   OR
               </Anotherauth>
           </Wrapper>
           <Wrapper>
             <Login>Already have an account? <Link to="/login">Login</Link></Login>
           </Wrapper>
           </Form>
       </Container>
       </>
   )
}

export default Signup;