import { useEffect, useState } from "react";
import "../../SCSS/Body.scss";
import "../../SCSS/Button.scss";
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "./cassette";
import Search from "../../Assets/search.png";



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
              setCluster(templateData)
              setInput("")
          })

      
    }, [])

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {

            if(selectedWorks.length === finalWorks.length){ 
                if(event.target.value === "Alles"){
                    setCluster(finalWorks)
                    setSelectedWorks(finalWorks)
                } else {
                    var filteredResults = finalWorks.filter((x: any) => x.cluster === event.target.value)
                    setCluster(filteredResults)
                    setSelectedWorks(filteredResults)
                }
            } else {
                
                if(event.target.value === "Alles"){
                    setCluster(finalWorks)
                    var filteredResults = finalWorks.filter((x:any) => x.user[0].name.toLowerCase().includes(input) || x.title.toLowerCase().includes(input))
                    setSelectedWorks(filteredResults)
                } else {
                    var filteredResults = finalWorks.filter((x: any) => x.cluster === event.target.value)
                    setCluster(filteredResults)
                    var filteredResults = filteredResults.filter((x:any) => x.user[0].name.toLowerCase().includes(input) || x.title.toLowerCase().includes(input))
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
                     var filteredResults = finalWorks.filter((x:any) => x.user[0].name.toLowerCase().includes(inputForm) || x.title.toLowerCase().includes(inputForm))
                     setSelectedWorks(filteredResults)
                } else {
                    var filteredResults = cluster.filter((x:any) => x.user[0].name.toLowerCase().includes(inputForm) || x.title.toLowerCase().includes(inputForm))
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
                        <option value="webApp" className="clusterOption">Web en App</option>
                        <option value="smartTechnologies" className="clusterOption">Smart Technologies</option>
                        <option value="motion" className="clusterOption">Motion</option>
                        <option value="extendedReality" className="clusterOption">Extended Reality</option>
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
                            <option value="webApp" className="clusterOption">Web en App</option>
                            <option value="smartTechnologies" className="clusterOption">Smart Technologies</option>
                            <option value="motion" className="clusterOption">Motion</option>
                            <option value="extendedReality" className="clusterOption">Extended Reality</option>
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