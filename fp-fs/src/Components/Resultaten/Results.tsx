import Nav from "../Standard/Nav";
import Footer from "../Standard/Footer";
import "../../SCSS/Home.scss"

function Results() {

  return (
    <div>
      <nav><Nav/></nav>

      <section className="navContainer">
        <button className='stemmenBtn btn'>Genomineerde</button>
        <button className='searchBtn btn'>Winnaars</button>
      </section>

      <footer><Footer/></footer>
    </div>
    
  )
}
export default Results