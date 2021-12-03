import styled from "styled-components";
import gradient from '../images/gradient.png';

export const MovieCard = styled.section`
   max-width:1440px;
         background-color: rgba(17,17,17,0.8);
    overflow: hidden;
   box-shadow: 0 0 20px rgb(0 0 0 / 50%);
   height:auto;  
   margin-bottom:2em;
`;
export const Head = styled.div`
 background-color: rgba(17,17,17,0.8);
    background-image: url(${gradient});
    background-position: top;
    background-repeat: repeat-x;
    margin-bottom: 1px;
    overflow: hidden;
    padding: 0 25px;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 50px #000;
`;
export const Title = styled.h2`
 color:#fff;
 float:left;
 line-height:1.5;
`;
export const Container = styled.div`
  width:100%;
  display:grid;
  grid-template-columns:repeat(1,1fr 2fr);
  gap:0.5em;
  padding:0.5em;
    @media (max-width:900px) {
    display:block;
    
   
  }

`;
export const Img = styled.img`
 
`;
export const Description = styled.div`
   width:100%;
   height:100%;
`;
export const FilmCast = styled.div`

   margin-bottom:2em;
`;
export const FilmCastContainer = styled.div`
   width:100%;
`;
export const Lists = styled.div`
  span{
  	 color:#777;
  	 font-size:20px;
  	     font-family: light;
  	     font-weight:500;
  } 
`;
export const List = styled.div`
    margin-top:30px; 
     color:#fff;
     span{
      border-bottom: 1px dotted #555;

     }
`;
export const CastNamesWrapper = styled.ul`
  display:flex;
    flex-wrap: wrap;
    line-height: 2;
    margin-left: -38px;
`;
export const CastNames = styled.li`
  margin-right:10px;

`; 
export const MovieDescriptionTitle =styled.h4`
   color:#777;
   margin-top:0.5em;
`; 
export const MovieDescription = styled.p`
   color:#f1f1f1;
   line-height:1.5;
   margin-top:0.5em;

`;
export const MovieDescriptionWrapper = styled.div`
  margin-top:2em;
`;
export const Poster = styled.div`
   width:100%;
   height:100%;
   position:absolute;
   top:0%;
   left:0%;
    display:flex;
    align-items:flex-start;
    justify-content:cenetr;
   padding:2em;
   background-color:rgba(0,0,0,0.7);
   z-index:999;
   display:none;
`;
export const VideoTrailer = styled.div`
   width:100%;
   height:100%;
   position:absolute;
   top:0%;
   left:0%;
    display:flex;
    align-items:flex-start;
    justify-content:cenetr;
   padding:2em;
   background-color:rgba(0,0,0,0.7);
   z-index:999; 
   display:none;
 

`;
export const VideoTrailerContainer = styled.div`
      margin:0 auto;
       z-index:999; 
      border-radius:10px;
      border:1em solid #777;
`;

export const PosterImg = styled.img`
    margin:0 auto;
   z-index:999;

`;