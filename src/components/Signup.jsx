import {useState} from 'react';
import {Container,Wrapper,Login,Anotherauth,BtnWrapper,Button,Form,Input,Label, LogoWrapper, Logo} from "./style/Login";
import {Link} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
const Signup = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

  
      const register = async (e) => {
        e.preventDefault();
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };
    

   return (
       <>
       <Container>
           <Form>
           <LogoWrapper>
               <Logo>ss</Logo>
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