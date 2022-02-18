import {Nav,Header,Img,List,ListElement,HeadIntro,Title,IntroDesc,LogoContainer} from "./style/Nav.js"
import {Link,useParams} from "react-router-dom"; 

function Navbar({logo}) {
  const { id } = useParams();

  
  return (
    <>
        <Header>
          <Nav>
          <LogoContainer>
            <Img src={logo} />  
            </LogoContainer>
            <List>
              <ListElement><Link to="/">Box Movies</Link></ListElement>
              <ListElement><Link to="/popular">Popular</Link></ListElement>
              <ListElement><Link to="/top">Top Rated</Link></ListElement>
              <ListElement><Link to="upcoming">UpComing</Link></ListElement>
            </List>
            <List style={{border:"none"}}>
              <ListElement><Link to="/">Bookmarks</Link></ListElement>
              <ListElement><Link to="/popular">History</Link></ListElement>
              <ListElement><Link to="/top">My collection</Link></ListElement>
              
            </List>
          </Nav>
          <>
          { id &&
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
