import styled from "styled-components";
export const Header = styled.header`
   max-width:1440px;
   color:${({theme})=> theme.colors.primary}
`;
export const Nav = styled.nav`
   width:100%;
   display:flex;
   align-items:center
`;
export const Img = styled.img`
  margin-rigth:2em;
`;
export const List = styled.ul`
    display:flex;
    align-items:center;

`;
export const ListElement = styled.li`
   margin-left:1em;
   color:${({theme})=> theme.colors.primary};
`;
export const HeadIntro = styled.div`
   width:100%;
   margin-top:2em;
   font-family:regular, Arial, Helvetica, sans-serif;

`;
export const Title = styled.h2`
  margin-bottom:1em;
     font-weight:400;

`;
export const IntroDesc = styled.p`
   background-color:${({theme})=> theme.colors.secondry};
   padding:0.5em;
   margin-bottom:1em;
   color:${({theme})=> theme.colors.primary};
   line-height:1.5;
`;



//HeadIntro,Title,IntroDesc