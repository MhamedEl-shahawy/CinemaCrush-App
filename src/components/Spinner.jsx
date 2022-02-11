import {Img,SpinnerContainer} from "./style/Loader";
import loader from './images/loader.gif';
function Spinner() {
  return (
   
    <>
    <SpinnerContainer className="loader-video">
        <Img src={loader} alt="loader"/>
        </SpinnerContainer>
    
    </>
  
  );
}

export default Spinner;
