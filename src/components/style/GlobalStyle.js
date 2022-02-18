import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    width:100%;
    background:${({theme,urlImage})=> urlImage ? "center center / cover no-repeat": theme.colors.main};
    background-image: url(${({urlImage})=>urlImage});
    background-color:${({theme})=>theme.colors.main}; 
    color: hsl(192, 100%, 9%);
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.1rem;
    overflow-x:hidden;
    position:relative;
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