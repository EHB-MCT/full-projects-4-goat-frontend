import { useEffect, useState } from "react";
import "../../SCSS/Body.scss";
import "../../SCSS/Button.scss"
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "./cassette";
import Search from "../../Assets/search.png"



function Body(){
    const [finalWorks, setFinalWorks] = useState([])
    const [selectedWorks, setSelectedWorks] = useState([]);
    const [cluster, setCluster] = useState([])
    const [input, setInput] = useState(String)
    const [displayFilter, setDisplayFilter] = useState(String)
    

    useEffect(() => {
        finalWorkService.fetchFinalWorks().then((Response) => {
            var templateData =  Response.slice(0, 40);
              setFinalWorks(templateData)
              setSelectedWorks(templateData)
              setDisplayFilter("none")
          })

      
    }, [])

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        /* val filteredResults = finalWorks.filter {it.cluster == event.target.value}
            setSelectedWorks(filteredResults) */

            if(selectedWorks.length === finalWorks.length){
                if (event.target.value === "Alles"){
                    var filteredResults = finalWorks.slice(0,40)
                    setCluster(filteredResults)
                    setSelectedWorks(filteredResults)
                }else if(event.target.value === "Web en app"){
                    var filteredResults = finalWorks.slice(0,10)
                    setCluster(filteredResults)
                    setSelectedWorks(filteredResults)
                }else if(event.target.value === "Smart Technologies"){
                    var filteredResults = finalWorks.slice(10,20)
                    setCluster(filteredResults)
                    setSelectedWorks(filteredResults)
                }else if(event.target.value === "Motion"){
                    var filteredResults = finalWorks.slice(20,30)
                    setCluster(filteredResults)
                    setSelectedWorks(filteredResults)
                }else if(event.target.value === "Extended Reality"){
                    var filteredResults = finalWorks.slice(30,40)
                    setCluster(filteredResults)
                    setSelectedWorks(filteredResults)
                }
            } else {
                if (event.target.value === "Alles"){
                    var filteredResults = finalWorks.slice(0,40)
                    setCluster(filteredResults)
                    filteredResults = filteredResults.filter((x:any) => x.title.toLowerCase().includes(input))
                    setSelectedWorks(filteredResults)
                }else if(event.target.value === "Web en app"){
                    var filteredResults = finalWorks.slice(0,10)
                    setCluster(filteredResults)
                    filteredResults = filteredResults.filter((x:any) => x.title.toLowerCase().includes(input))
                    setSelectedWorks(filteredResults)
                }else if(event.target.value === "Smart Technologies"){
                    var filteredResults = finalWorks.slice(10,20)
                    setCluster(filteredResults)
                    filteredResults = filteredResults.filter((x:any) => x.title.toLowerCase().includes(input))
                    setSelectedWorks(filteredResults)
                }else if(event.target.value === "Motion"){
                    var filteredResults = finalWorks.slice(20,30)
                    setCluster(filteredResults)
                    filteredResults = filteredResults.filter((x:any) => x.title.toLowerCase().includes(input))
                    setSelectedWorks(filteredResults)
                }else if(event.target.value === "Extended Reality"){
                    var filteredResults = finalWorks.slice(30,40)
                    setCluster(filteredResults)
                    filteredResults = filteredResults.filter((x:any) => x.title.toLowerCase().includes(input))
                    setSelectedWorks(filteredResults)
                }
            }


          
       
    }

    const getInput = (inputForm: any) => {
        setInput(inputForm)
            if(inputForm === ""){
                setSelectedWorks(cluster)
            }else {
                if(selectedWorks.length === finalWorks.length){
                    var filteredResults = finalWorks.filter((x:any) => x.title.toLowerCase().includes(input))
                    setSelectedWorks(filteredResults)
                } else {
                    var filteredResults = selectedWorks.filter((x:any) => x.title.toLowerCase().includes(input))
                    setSelectedWorks(filteredResults)
                }

            
            } 
    }

    const showForm = () => {
        if(displayFilter === "none"){
            setDisplayFilter("block")
        } else {
            setDisplayFilter("none")
        }
    }

 


    return(
        <main id="mainFinalWorks">
            <div id="SearchFormWrapper">
                <div id="searchForm">
                    <input className="inputText" onChange={event => getInput(event.target.value)} type="text" placeholder="Zoek op titel, student, tag..." />
                    <img src={Search} alt="search icon" id="searchIcon"/> 
                    
                    <select onChange={handleChangeSelect} className="clusterSelection">
                        <option value="Alles" className="clusterOption">Alles</option>
                        <option value="Web en app" className="clusterOption">Web en App</option>
                        <option value="Smart Technologies" className="clusterOption">Smart Technologies</option>
                        <option value="Motion" className="clusterOption">Motion</option>
                        <option value="Extended Reality" className="clusterOption">Extended Reality</option>
                    </select>
                </div>
            </div>
            <div className="bodyContainer">
                <div id="filterButton">
                    <button className="btn filterButtonPhone"  onClick={showForm}>Filter</button>

                    <div id="searchFormMobile" style={{'display': displayFilter}}>
                        <input className="inputText"  onChange={event => getInput(event.target.value)} type="text" placeholder="Zoek op titel, student, tag..." />
                        <img src={Search} alt="search icon" id="searchIcon"/> 
                        
                        <select onChange={handleChangeSelect} className="clusterSelection">
                            <option value="Alles" className="clusterOption">Alles</option>
                            <option value="Web en app" className="clusterOption">Web en App</option>
                            <option value="Smart Technologies" className="clusterOption">Smart Technologies</option>
                            <option value="Motion" className="clusterOption">Motion</option>
                            <option value="Extended Reality" className="clusterOption">Extended Reality</option>
                        </select>
                </div>
                </div>
               
                <div className="cassettesContainer">
                    {
                    selectedWorks.map(x => {
                        return <Cassette data={x} key={x["id"]}></Cassette>
                    })}  

                    
                </div>
                
            </div>
        </main>
       
    )
}
export default Body