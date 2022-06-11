import Nav from "../Standard/Nav";
import Footer from "../Standard/Footer";
import "../../SCSS/Home.scss";
import Body from "./Body";


function Home(){
    return(
        <div className="homeContainer">
            <nav><Nav/></nav>
            <Body/>
            <footer><Footer/></footer>
        </div>
    )
}

export default Home