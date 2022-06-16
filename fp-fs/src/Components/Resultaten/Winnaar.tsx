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

    const renderer = ({days, hours, minutes, seconds, completed}: any) => {
        if(completed){
            return(
                <div className="cassettesContainer">
                {
                finalWorks.map(x => {
                    return <Cassette data={x} key={x["id"]} ></Cassette>
                })}     
            </div>
            )
        } else {
            return(
                <div className="Countdown">
                <h1>
                    Ontdek hier de winnaars
                </h1>
                <div id="CountDownStyle">
                    <div id="days">
                        <p>{days < 10? <span>0{days}</span>: <span>{days}</span>  }</p>
                        <p>{days <= 1? <span>Dag</span>: <span>Dagen</span>  }</p>
                    </div>
                    <div id="hours">
                        <p>{hours < 10? <span>0{hours}</span>: <span>{hours}</span>  }</p>
                        <p>{hours <= 1? <span>Uur</span>: <span>Uren</span>  }</p>
                    </div>
                    <div id="minutes">
                        <p>{minutes < 10? <span>0{minutes}</span>: <span>{minutes}</span>  }</p>
                        <p>{minutes <= 1? <span>Min</span>: <span>Min</span>  }</p>
                    </div>
                    <div id="seconds">
                        <p>{seconds < 10? <span>0{seconds}</span>: <span>{seconds}</span>  }</p>
                        <p>{seconds <= 1? <span>Sec</span>: <span>Sec</span>  }</p>
                    </div>
                </div>
              
            </div>
           
            )
        }
    }


    return(
        <div >
            <Countdown date={new Date("2022-06-24T20:00:00+02:00")} renderer={renderer}/>    
           
            
        </div>       
    )
}

export default Winnaar