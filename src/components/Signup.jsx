import {useState} from 'react';
import {Container,Wrapper,Login,Anotherauth,BtnWrapper,Button,Form,Input,Label, LogoWrapper, Logo} from "./style/Login";
import {Link} from "react-router-dom";

const Signup = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const signupAuth = (e)=>{
      e.preventDefault();
      let myHeaders = new Headers();
      myHeaders.append('Content-Type','application/json')
      let raw = JSON.stringify({
          "email":email,
          "password":password,
          "name":name
      });
     
      var requestOptions = {
        method: 'POST',
        body: raw,
        headers:myHeaders
      };
      if(email.toString().trim()!==""&&password.toString().trim()!== ""&&confirmPassword.toString().trim() !== ""&&name.toString().trim()!==""){
        fetch("https://cinema-club-api.herokuapp.com/api/users",requestOptions)
        .then(res => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
         console.log(data)
        })
        .catch(err => {
          // auto catches network / connection error
         
          console.log(err.message);
        })
      }
    }
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
               <BtnWrapper onClick={(e)=>signupAuth(e)}>
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