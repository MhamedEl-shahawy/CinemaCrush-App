import styled from "styled-components";
import gradient from '../images/gradient.png';

export const MovieCard = styled.section`
   width:100%;
    overflow: hidden;
   margin-bottom:2em;
   padding: 1em;
   
`;
export const MovieCardWrapper = styled.div`
   width:100%;
   background-color: rgba(17,17,17,0.8);
   box-shadow: 0 0 20px rgb(0 0 0 / 50%);
   
`;
export const Head = styled.div`
position:relative;
width: 100%;
height: 5rem;

 background-color: rgba(17,17,17,0.8);
    background-image: url(${gradient});
    background-position: top;
    background-repeat: repeat-x;
    margin-bottom: 1px;
    overflow: hidden;
    padding: 0 1.8em;
    align-items: center;
    z-index: 1;
    box-shadow: 0 0 50px #000;
    display: flex;
    justify-content: space-between;
    .bookPlayer{
       right:0;
       color:#fff;
       top: 0;
    }
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
  grid-gap:0.5em;
  padding:0.5em;
    @media (max-width:900px) {
    display:block;
    
   
  }

`;
export const Img = styled.img`
    width:100%;
`;
export const Description = styled.div`
   width:100%;
   height:100%;
`;

export const FilmCastContainer = styled.div`
   width:100%;
`;
export const FilmCast = styled.div`

   margin-bottom:2em;
`;
export const Lists = styled.div`

  span{
  	 color:#777;
  	 font-size:20px;
  	     font-family: light;
  	     font-weight:500;
  } 
  .white{
    color:#fff;
    cursor: pointer
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
    
`;
export const CastNames = styled.li`
  margin-right:10px;

`; 
export const MovieDescriptionTitle =styled.h4`
   color:#777;
   margin-top:0.5em;
`; 
export const MovieDescription = styled.p`
   color:#ffff;
   line-height:1.5;
   margin-top:0.5em;

`;
export const MovieDescriptionWrapper = styled.div`
  margin-top:2em;
`;
export const Poster = styled.div`
   width:100%;
   height:100%;
   position:fixed;
   top:0%;
   left:0%;
    display:${({show})=> show? "flex":"none"};
    align-items:flex-start;
    padding:1em;
    justify-content:center;
   cursor: pointer;

   padding:2em;
   background-color:rgba(0,0,0,0.8);
   z-index:999;
`;
export const Iframe = styled.iframe`
  width:100%;
  height:100%;
`;
export const VideoTrailer = styled.div`
   width:100%;
   height:100%;
   position:fixed;
   display:${({show})=> show ? "flex":"none"};
   top:0%;
   left:0%;
    align-items:flex-start;
    justify-content:center;
   padding:2em;
   background-color:rgba(0,0,0,0.8);
   z-index:999; 
   cursor: pointer;
   padding:2em;

`;
export const VideoTrailerContainer = styled.div`
      position: relative;
      margin:0 auto;
       z-index:999; 
      border-radius:10px;
      border:10px solid #777;
      width:40rem;
  height:30rem;
  .loader-video{
      position:absolute;
      top: 0;
      left: 0;
      z-index: 9999;
  }
  @media (max-width:700px){
   width:60rem;
   height:20rem;
  }
`;

export const PosterImg = styled.img`
    margin:0 auto;
   z-index:999;
`;
export const Genre = styled.span`
 margin-left:1em;
`;