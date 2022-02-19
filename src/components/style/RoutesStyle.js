import styled from "styled-components";

export const Container = styled.section`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(1,15% 85%);
grid-gap:1em; 
position: relative;
`;
export const WrapperRoutes = styled.div`
width: 100%;
height: 100%;
padding: 1em;
background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${({urlImage})=>urlImage});
    background-color:${({theme})=>theme.colors.main}; 

`;