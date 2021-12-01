import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
  
    background: ${({theme})=> theme.colors.main};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    overflow-x:hidden;
    padding:2em;
  }
  
  img {
    max-width: 100%;
}
a{
   text-decoration:none;
   color:${({theme})=> theme.colors.primary};
   transition:all ease-in-out 0.5s;
   &:hover{
     text-decoration:underline;
     color:#888;
   }
}
ul{
   list-style:none;
}
`

export default GlobalStyle;