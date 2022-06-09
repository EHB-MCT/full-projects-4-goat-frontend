import "../../../scss/schilderij.scss"
import Nachtwacht from "../../../Assets/Nachtwacht.jpg"

function Schilderij(){
    return(
        <div className="schilderijCont">
            <img id="eindwerk" className="Web" src={Nachtwacht} alt="eindwerk-template"></img>
        </div>
    )
}

export default Schilderij