import React, { useEffect, useState } from "react";
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "../Home/cassette";

function Winnaar(){
    const [finalWorks, setFinalWorks] = useState([])

    useEffect(() => {
        finalWorkService.fetchFinalWorks().then((Response) => {
            var templateData =  Response.slice(0, 40);
              setFinalWorks(templateData)
          })
    }, [])


    return(
        <div className="cassettesContainer">
            {
            finalWorks.map(x => {
                return <Cassette data={x} key={x["id"]} ></Cassette>
            })}     
        </div>       
    )
}

export default Winnaar