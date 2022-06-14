import { useEffect, useState } from "react";
import "../../SCSS/Genomineerd.scss";
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "../Home/cassette";
import "../../SCSS/cassette.scss";
import "../../SCSS/Genomineerd.scss";

import Motion from "../../Assets/Logos-Clusters/MOTION_Logo.svg"

function Genomineerd(){
    const [finalWorks, setFinalWorks] = useState([])

    useEffect(() => {
        finalWorkService.fetchFinalWorks().then((Response) => {
            var templateData =  Response.slice(0, 40);
              setFinalWorks(templateData)
          })
    }, [])


    return(
        <div className="webAppGenom">
            <img className="logoImgcluster" src={Motion} alt="name-cluster-logo" />
            <div className="cassettesContainer">
                {
                finalWorks.map(x => {
                    return <Cassette data={x} key={x["id"]} ></Cassette>
                })}
            </div>     
        </div>       
    )
}
export default Genomineerd