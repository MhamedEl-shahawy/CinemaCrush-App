import {useState} from "react";
import {Container,Wrapper,Signup,Anotherauth,Forget,BtnWrapper,Button,Form,Input,Label, LogoWrapper, Logo} from "./style/Login";
 import {Link,useNavigate} from "react-router-dom";
 import logo from "./images/logo.png";
import {useDispatch} from "react-redux";
import {getLoginToken} from "../features/auth"
 const Login = ({authrized})=>{
    const [params,setParams] = useState({token:"333",status:true});
    const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
   const navigate = useNavigate();
   const dispatch = useDispatch();
     const loginAuth = (e)=>{
        e.preventDefault();
       if(email.toString().trim() !== ""){
        localStorage.setItem("cinema",JSON.stringify({
            token:"3333",
            status:true
        }));   
        dispatch(getLoginToken({email:email,password:password})).then((db)=>{
            console.log(db)
        })
        authrized(params);

        // navigate("/");
    }else{
        authrized("");

    }
     };
    return (
        <>
        <Container>
            <Form>
            <LogoWrapper>
                <Logo></Logo>
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