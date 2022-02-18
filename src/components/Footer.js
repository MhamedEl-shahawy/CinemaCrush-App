import {FooterWrapper} from "./style/FooterStyle";
function Footer({logo}) {
  return (
   
    <>
    <FooterWrapper>
        
        <p>Copyright © <a href="https://github.com/MhamedEl-shahawy" target="_blank">MhamedElshahawy</a>. Date Source: <a href="https://www.themoviedb.org/">TMDb</a></p>
        <img src={logo} />
    </FooterWrapper>
    </>
  
  );
}

export default Footer;
