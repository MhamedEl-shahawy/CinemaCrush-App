import {Container,Img} from "./style/Loader";
import loader from './images/loader.gif';
function Loader() {
  return (
   
    <>
    <Container>
        <Img src={loader} alt="loader"/>
        
    </Container>
    </>
  
  );
}

export default Loader;
