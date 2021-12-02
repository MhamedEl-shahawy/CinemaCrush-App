import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
  
    background:${({theme,urlImage})=> urlImage ? "center center / cover no-repeat": theme.colors.main};
    background-image: url(${({urlImage})=>urlImage});
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    overflow-x:hidden;
  }
  
  img {
    max-width: 100%;
}
a{
   text-decoration:none;
   color:${({theme})=> theme.colors.primary};
   transition:all ease-in-out 0.5s;
   &:hover{
      border-bottom: 1px dotted #555;
     color:#888;
   }
}
ul{
   list-style:none;
}
`

export default GlobalStyle;