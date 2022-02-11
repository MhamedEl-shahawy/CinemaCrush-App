import styled from "styled-components";

export const Container = styled.section`
 position: fixed;
 z-index: 9999;
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  top: 0;
  left: 0;
`;
export const Img = styled.img`
 max-width: 100%;
`;
export const SpinnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;