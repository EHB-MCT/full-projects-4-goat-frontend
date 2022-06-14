import { useEffect, useState } from "react";
import "../../SCSS/Genomineerd.scss";
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "../Home/cassette";
import "../../SCSS/cassette.scss";
import "../../SCSS/Genomineerd.scss";

import Motion from "../../Assets/Logos-Clusters/MOTION_Logo.svg"
import WebApp from "../../Assets/Logos-Clusters/WEB&APP_LOGO.svg"
import Reality from "../../Assets/Logos-Clusters/EXTENDEDREALITY_LOGO.svg"
import Smart from "../../Assets/Logos-Clusters/SMARTTECHNOLOGY_Logo.svg"

function Genomineerd(){
    const [finalWorks, setFinalWorks] = useState([])

    useEffect(() => {
        finalWorkService.fetchFinalWorks().then((Response) => {
            var templateData =  Response.slice(0, 40);
              setFinalWorks(templateData)
          })
    }, [])


    return(
        <div className="allClusters">
            <div className="motionGenom">
                <div className="motionImg">
                    <img className="logoImgcluster" src={Motion} alt="name-cluster-logo" />
                </div>
                <div className="cassettesContainer">
                    {
                    finalWorks.map(x => {
                        return <Cassette data={x} key={x["id"]} ></Cassette>
                    })}
                </div>     
            </div>       
            <div className="webAppGenom">
                <div className="appImg">
                    <img className="logoImgcluster" src={WebApp} alt="name-cluster-logo" />
                </div>
                <div className="cassettesContainer">
                    {
                    finalWorks.map(x => {
                        return <Cassette data={x} key={x["id"]} ></Cassette>
                    })}
                </div>     
            </div>       
            <div className="realityGenom">
                <div className="realityImg">
                    <img className="logoImgcluster" src={Reality} alt="name-cluster-logo" />
                </div>
                <div className="cassettesContainer">
                    {
                    finalWorks.map(x => {
                        return <Cassette data={x} key={x["id"]} ></Cassette>
                    })}
                </div>     
            </div>       
            <div className="smartGenom">
                <div className="smartImg">
                    <img className="logoImgcluster" src={Smart} alt="name-cluster-logo" />
                </div>
                <div className="cassettesContainer">
                    {
                    finalWorks.map(x => {
                        return <Cassette data={x} key={x["id"]} ></Cassette>
                    })}
                </div>     
            </div>       
        </div>
    )
}
export default Genomineerd