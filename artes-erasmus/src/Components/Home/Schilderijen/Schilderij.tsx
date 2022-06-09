import "../../../scss/schilderij.scss"
import { useEffect, useState } from "react"

function Schilderij(){
    const [frame, setFrame] = useState(String)

    useEffect(() => {
        var number = Math.floor(Math.random() * (5 - 1 + 1)) + 1

        if(number == 1){
            setFrame("Web")
        } else if(number === 2){
            setFrame("Motion")
        } else if(number === 3){
            setFrame("Mobile")
        } else if (number === 4){
            setFrame("Digital")
        } else if (number === 5) {
            setFrame ("Game")
        }

    }, [])



    return(
        <div className="schilderijCont">
            <img id="eindwerk" className={frame} src="https://source.unsplash.com/468x260/?webdevelopment" alt="eindwerk-template"></img>
        </div>
    )
}

export default Schilderij