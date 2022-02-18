import styled from "styled-components";

export const Container= styled.section`
width: 100%;
height: 100%;
padding-top:2em;
display: flex;
align-content: center;
justify-content: center;
`;
export const Form = styled.form`
 width: 34%; 
 background-color:#fff; 
 padding: 1em;
 border-radius: 10px;
position:relative;
`;
export const LogoWrapper = styled.div`
   width:100%;
   height: 5rem;
  
   display:flex;
   justify-content: center;
  margin-bottom: 1em;
`;
export const  Logo =styled.span`
 position:absolute;
   top:-10%;
   width:130px;
   height: 120px;
   border-radius: 50%;
   background-color:#f00;
   text-align:center; 
`;
export const Wrapper = styled.div`
width: 100%;
`;
export const Input = styled.input`
  width:100%;
  border:1px solid #f1f1f1;
  border-radius: 7px;
  background-color:rgba(12, 11, 16,.04);
  font-size:1.2rem;
  padding:0.3em 0.4em;
  color:#000;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;
export const Label = styled.label`
 width: 100%;
 color:#000;
 text-transform: capitalize;
`;
export const Button = styled.button`
  width: 100%;
  padding:0.7em 0;
  color: #fff;
  background-color:transparent;
  border:none;
  margin: 0.3em 0;
  font-size:1.1em;
`;
export const BtnWrapper = styled.a`
background-color:#5147D8; 
border-radius:35px;
padding:0.7em 1.7em;
`;
export const Forget = styled.p`
font-size:1rem;
 a{
      color:#1A57E4;
 }
`;
export const Signup = styled.p`
font-size:0.9rem;
text-align: center;
a{
    color:#888;
}
`;
export const Login = styled.p`
font-size:0.9rem;
text-align: center;
a{
    color:#888;
}
`;
export const Anotherauth = styled.p`
width: 100%;
position: relative;
text-align:center;

  &&::after{
    content:"";
    position:absolute;
    width: 45%;
    border-top:1px solid #f1f1f1;
    margin-left:0.3em;
    margin-top: 0.5em;
    
  }

  &&::before{
    content:"";
    position:absolute;
    width: 45%;
    border-top:1px solid #f1f1f1;
    left: 0;
    
    margin-top: 0.5em;
    
  }
`;