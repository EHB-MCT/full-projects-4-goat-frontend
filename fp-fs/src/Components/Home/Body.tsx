import { useEffect, useState } from "react";
import "../../SCSS/Body.scss";
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "./cassette";


function Body(){
    const [finalWorks, setFinalWorks] = useState([])

    useEffect(() => {
        finalWorkService.fetchFinalWorks().then((Response) => {
            var templateData =  Response.slice(0, 40);
              setFinalWorks(templateData)
          })
    }, [])


    return(
        <div className="bodyContainer">
            <div className="stripesSide">
                <div id="blue"></div>
                <div id="red"></div>
                <div id="orange"></div>
                <div id="yellow"></div>
                <div id="pink"></div>
            </div>
            <div className="cassettesContainer">
                {
                finalWorks.map(x => {
                    return <Cassette data={x} key={x["id"]} ></Cassette>
                })}  

                
            </div>
            
        </div>
    )
}
export default Body