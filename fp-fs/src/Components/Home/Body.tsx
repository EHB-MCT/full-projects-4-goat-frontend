import { useEffect, useState } from "react";
import "../../SCSS/Body.scss";
import Stripes from "./Stripes";
import "../../SCSS/Button.scss"
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "./cassette";
import Search from "../../Assets/search.png"



function Body(){
    const [finalWorks, setFinalWorks] = useState([])
    const [selectedWorks, setSelectedWorks] = useState([]);

    

    useEffect(() => {
        finalWorkService.fetchFinalWorks().then((Response) => {
            var templateData =  Response.slice(0, 40);
              setFinalWorks(templateData)
              setSelectedWorks(templateData)
          })
    }, [])

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        /* val filteredResults = finalWorks.filter {it.cluster == event.target.value}
            setSelectedWorks(filteredResults) */

        if (event.target.value === "Alles"){
            var filteredResults = finalWorks.slice(0,40)
            setSelectedWorks(filteredResults)
        }else if(event.target.value === "Web en app"){
            var filteredResults = finalWorks.slice(0,10)
            setSelectedWorks(filteredResults)
        }else if(event.target.value === "Smart Technologies"){
            var filteredResults = finalWorks.slice(10,20)
            setSelectedWorks(filteredResults)
        }else if(event.target.value === "Motion"){
            var filteredResults = finalWorks.slice(20,30)
            setSelectedWorks(filteredResults)
        }else if(event.target.value === "Extended Reality"){
            var filteredResults = finalWorks.slice(30,40)
            setSelectedWorks(filteredResults)
        }
    }

    const handleChangeInput = () => {
            
    }


    return(
        <main>
            <div>
                <div id="searchForm">
                    <input onChange={handleChangeInput} type="text" placeholder="Zoek op titel, student, tag..." />
                    <img src={Search} alt="search icon" id="searchIcon"/> 
                    
                    <select onChange={handleChangeSelect}>
                        <option value="Alles">Alles</option>
                        <option value="Web en app">Web en App</option>
                        <option value="Smart Technologies">Smart Technologies</option>
                        <option value="Motion">Motion</option>
                        <option value="Extended Reality">Extended Reality</option>
                    </select>
                </div>
            </div>
            <div className="bodyContainer">
                <div id="filterButton">
                    <button className="btn filterButtonPhone">Filter</button>
                </div>
                <div className="cassettesContainer">
                    {
                    selectedWorks.map(x => {
                        return <Cassette data={x} key={x["id"]} ></Cassette>
                    })}  

                    
                </div>
                
            </div>
        </main>
       
    )
}
export default Body