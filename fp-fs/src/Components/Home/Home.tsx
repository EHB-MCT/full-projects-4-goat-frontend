import Nav from "../Standard/Nav";
import Footer from "../Standard/Footer";
import "../../SCSS/Home.scss"


function Home(){
    return(
        <div className="homeContainer">
            <nav><Nav/></nav>
            <footer><Footer/></footer>
        </div>
    )
}

export default Home