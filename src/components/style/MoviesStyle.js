import styled from "styled-components";

export const MoviesContainer = styled.section`
    max-width:1440px;
    margin-top:1em;
    color:${({theme})=> theme.colors.primary};
 `;
export const Title = styled.h2`
    margin-bottom:1em;
     font-weight:400;
`;

export const Movies = styled.div`
   width:100%;
   display:grid;
   grid-template-columns:repeat(6,1fr);
   gap:0;

   &  div:nth-child(1) {
      grid-column: span 2;
      grid-row: span 2;
   }
   @media (max-width: 500px) {
    display:block;
  }
  @media screen and (min-width:500px) and (max-width: 900px) {
    grid-template-columns:repeat(2,1fr);
    grid-gap:1em;
    &  div:nth-child(1) {
      grid-column: span 1;
      grid-row: span 1;
      

   }
  }

`;
export const MovieContainer = styled.div`
     width: 100%;
     height: 100%;
     position: relative;
     &:hover{
      box-shadow: 0 0 40px rgb(0 0 0 / 70%) inset, 0 0 10px rgb(0 0 0 / 50%), 0 0 60px rgb(255 255 255 / 25%);
      h3{
     	 opacity:1;
     }
    }
    a{
      width: 100%;
      height: 100%;
    }
     a:hover{
       border:none;
     }
     @media (max-width: 768px) {
    margin-bottom:0.5em;
    
   
  }
`;
export const Movie = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
`;
export const MovieTitle = styled.h3`
     z-index:1;     
    text-shadow: 0 0 35px #000, 0 0 25px #000, 0 0 15px #000, 0 0 5px #000, 0 0 5px #000;
    text-transform: uppercase; 
  background-color: rgba(0,0,0,0.05);
    -webkit-transition: all .2s ease-in;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    transition: all .2s ease-in;
    box-shadow: 0 0 40px rgba(0,0,0,0.7) inset, 0 0 10px rgba(0,0,0,0.5), 0 0 60px rgba(255,255,255,0.25);
      position: absolute;
  bottom: 0;
   margin:0.5em;
   opacity:0;
`;
export const Img = styled.img`
  max-width:100%;
  max-height: 100%;
   
`;
export const Button = styled.button`
 border:1px solid #fff;
 background-color:transparent;
 padding:0.5em 1em;
 color:#fff;
 cursor: pointer;
`;
export const BtnContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin:1em 0;
`;
export const SaveContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: flex-end;
  position:relative;
`;
export const BookMarkWrapper = styled.div`
 position: absolute; 
    height: 70px; 
    width: 50px; 
    padding: 0px; 
    -webkit-transform: rotate(0deg) skew(0deg); 
    transform: rotate(0deg) skew(0deg); 
    border-left: 25px solid rgba(112, 112, 111,0.5); 
    border-right: 25px solid   rgba(112, 112, 111,0.5); 
    border-bottom: 25px solid transparent; 
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    color:#fff;
    right:0;
`;
// MoviesContainer,Title,Movies,Movie,Img