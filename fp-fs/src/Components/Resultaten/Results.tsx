import Nav from "../Standard/Nav";
import Footer from "../Standard/Footer";
import "../../SCSS/Home.scss"
import "../../SCSS/ResultsNav.scss"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Results() {
  
    const [selection, setSelection] = useState(String)
    const [styleWin, setStyleWin] = useState("cont");
    const [styleGenom, setStyleGenom] = useState("cont");

    let params = useParams()

    
    useEffect(() => {
        setSelection("ingredients")
        setStyleWin("not-active")
        setStyleGenom("activeSelection")
    },[params.Id])

    const setToWin = () => {
        setSelection("steps")
        setStyleWin("activeSelection")
        setStyleGenom("not-active")
    }

    const setToGenom = () => {
        setSelection("ingredients")
        setStyleWin("not-active")
        setStyleGenom("activeSelection")
    }
   
    return(
      <main>
          <Nav/> 
          <div id="selectionIngrOrSteps">
             <Link to="/results/genomineerden" className="routingLinks"><p className={styleGenom} onClick={setToGenom}>Genomineerden</p></Link> 
             <Link to="/results/winnaars" className="routingLinks"><p className={styleWin} onClick={setToWin}>Winnaars</p></Link> 
          </div>
          <div id="mainContent">
              <h1>Hallo</h1>
          </div>
          <footer><Footer/></footer>
      </main> 
    )

  // return (
  //   <div>
  //     <nav><Nav/></nav>

  //     <section className="navContainer">
  //       <button className='stemmenBtn btn'>Genomineerde</button>
  //       <button className='searchBtn btn'>Winnaars</button>
  //     </section>

  //     <footer><Footer/></footer>
  //   </div>
    
  // )
}
export default Results