import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width:100%;
  background-color:rgba(17,17,17,0.8);
  padding:2em;
  margin-top:2em;
  display:flex;
  align-items:flex-end;
  color:${({theme})=>theme.colors.primary};
  justify-content:space-between;

     @media (max-width: 768px) {
    display:block;
    
   
  }
`;