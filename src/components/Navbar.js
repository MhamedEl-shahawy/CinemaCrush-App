import {Nav,Header,Img,List,ListElement,HeadIntro,Title,IntroDesc,ListContainer,LogoContainer,Bar} from "./style/Nav.js"
import {Link,useParams} from "react-router-dom"; 
import { FaAlignJustify } from 'react-icons/fa';
import {useSelector,useDispatch} from "react-redux";
import {changeBar} from "../features/movies";
function Navbar({logo}) {
  const { id } = useParams();
  const barStatus = useSelector((state)=> state.movies.barStatus);
  const dispatch = useDispatch();
  console.log(barStatus)
  return (
    <>
        <Header>
          <Nav>
          <LogoContainer>
            <Bar onClick={()=> dispatch(changeBar())}>
            <FaAlignJustify/>
            </Bar>
            <Img src={logo} />  
            </LogoContainer>
            <ListContainer  bar={barStatus}>
            <List onClick={()=> dispatch(changeBar(false))}>
              <ListElement><Link to="/">Box Movies</Link></ListElement>
              <ListElement><Link to="/popular">Popular</Link></ListElement>
              <ListElement><Link to="/top">Top Rated</Link></ListElement>
              <ListElement><Link to="upcoming">UpComing</Link></ListElement>
            </List>
            <List style={{border:"none"}} onClick={()=> dispatch(changeBar(false))}>
              <ListElement><Link to="/">Bookmarks</Link></ListElement>
              <ListElement><Link to="/popular">History</Link></ListElement>
              <ListElement><Link to="/top">My collection</Link></ListElement>
              
            </List>
            </ListContainer>
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
