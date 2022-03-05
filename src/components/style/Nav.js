import styled from "styled-components";
export const Header = styled.header`
   width:100%;
   color:${({theme})=> theme.colors.primary};
   height:100%;
   position: -webkit-sticky;
position: sticky;
top:0;
z-index:999;
@media (max-width:1000px){
   background-color:${({theme})=> theme.colors.bgMob};      

}


`;
export const Nav = styled.nav`
   width:100%;
   display:block;
   height:100%;
   background-color:${({theme})=> theme.colors.nav2};      
   padding:1em 0;
   z-index:9999;
  
         @media (max-width:999px){
            display:block;
                 padding:0;
                padding: 1.5em 0;
                
                margin:0;
             
         }

`;
export const LogoContainer = styled.div`
  width: 100%;
  padding-left: 1.1em;
  @media (max-width:1000px){
   display: flex;
  justify-content: space-between;
  padding-right: 1em;
  
  }
  @media (min-width:1000px){
  text-align: center;
  background-color:${({theme})=> theme.colors.nav2};      

  }
 
`;
export const Img = styled.img`
max-width: 100%;

`;
export const List = styled.ul`
   border-bottom:1px solid rgba(47, 51, 67,0.5); 
   padding-top: 1em;
    @media (max-width:999px){
    justify-content: center;  
    }

`;
export const ListElement = styled.li`
   margin-bottom:1em;
   padding:0.6em 0;
   position: relative;
  &:hover{
   transition: all ease-in-out 0.4s;
   background-color:${({theme})=> theme.colors.bgHover};
   &::before{
         content: '';
        transition: all ease-in-out 0.4s;
         position: absolute;
         left: 0;
         top:0;
         background-color:${({theme})=> theme.colors.primary};
         width:0.2rem;
         height: 100%;
      }
  }
a{
   color:${({theme})=> theme.colors.navColor};
   padding-left:2em;
    font-size:1rem;
   border: none !important;

}
   color:${({theme})=> theme.colors.primary};
    @media (max-width:999px){
      font-size: 0.8em;
      margin:0;
      margin-right:0.7em;
    }
`;
export const HeadIntro = styled.div`
   width:100%;
   margin-top:2em;
   font-family:regular, Arial, Helvetica, sans-serif;
      padding:2em;


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
export const Bar = styled.div`
cursor: pointer;
@media (min-width:1000px){
    display: none;
}
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color:${({theme})=> theme.colors.bgMob};      
  @media (max-width:1000px){
     display: ${({bar})=> bar ? "block":"none"};
     margin-top:1em;
  }
`;
//HeadIntro,Title,IntroDesc