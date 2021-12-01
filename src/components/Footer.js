import {FooterWrapper} from "./style/FooterStyle";
function Footer({logo}) {
  return (
   
    <>
    <FooterWrapper>
        
        <p>Copyright © CinemaCrush. Date Source: <a href="https://www.themoviedb.org/">TMDb</a></p>
        <img src={logo} />
    </FooterWrapper>
    </>
  
  );
}

export default Footer;
