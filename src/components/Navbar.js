import {Nav,Header,Img,List,ListElement,HeadIntro,Title,IntroDesc} from "./style/Nav.js"
import {Link} from "react-router-dom"; 

function Navbar({logo,id}) {
  return (
    <>
        <Header>
          <Nav>
            <Img src={logo} />  
            <List>
              <ListElement><Link to="/">Box Movies</Link></ListElement>
              <ListElement><Link to="/popular">Popular</Link></ListElement>
              <ListElement><Link to="/top">Top Rated</Link></ListElement>
              <ListElement><Link to="upcoming">UpComing</Link></ListElement>
            </List>
          </Nav>
          <>
          { !id &&
          <HeadIntro>
            <Title>Latest movies and movie trailers</Title>
            <IntroDesc>CinemaCrush is your beautiful collection of popular, top rated, box office and upcoming movies. Discover latest movie trailers and reviews. Show your LOVE of movies.</IntroDesc>
          </HeadIntro>
          } 
          </>
        </Header>
    </>
  );
}

export default Navbar;
