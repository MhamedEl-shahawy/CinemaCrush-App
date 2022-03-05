import styled from "styled-components";

export const Container = styled.section`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(1,15% 85%);
grid-gap:1em; 
position: relative;
@media (max-width:1000px){
  display:block ;
}
`;
export const WrapperRoutes = styled.div`
width: 100%;
height: 100%;

background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${({urlImage})=>urlImage});
    background-color:${({theme})=>theme.colors.main}; 
    @media (min-width:1000px){
  padding: 1em;
}
`;
export const NavMob = styled.nav`
  width: 100%;
  background-color:#fff; 
`;