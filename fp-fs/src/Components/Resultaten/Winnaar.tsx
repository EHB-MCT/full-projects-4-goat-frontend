import React, { useEffect, useState } from "react";
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "../Home/cassette";
import Countdown from 'react-countdown';

function Winnaar(){
    const [finalWorks, setFinalWorks] = useState([])

    useEffect(() => {
        finalWorkService.fetchFinalWorks().then((Response) => {
            var templateData =  Response.slice(0, 40);
              setFinalWorks(templateData)
          })
    }, [])


    return(
        <div >
            <Countdown date={new Date("2022-06-24T20:00:00+02:00")} />    
            <div className="cassettesContainer">
                {
                finalWorks.map(x => {
                    return <Cassette data={x} key={x["id"]} ></Cassette>
                })}     
            </div>
            
        </div>       
    )
}

export default Winnaar