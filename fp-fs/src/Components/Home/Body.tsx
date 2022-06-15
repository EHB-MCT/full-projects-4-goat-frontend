import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import "../../SCSS/Body.scss";
import Stripes from "./Stripes";
import "../../SCSS/Button.scss"
import { finalWorkService } from "../../Services/finalWorkService";
import Cassette from "./cassette";
import Search from "../../Assets/search.png"
import '../../Services/translation.js' ;


function Body(){
    const {t} = useTranslation();
    const [finalWorks, setFinalWorks] = useState([])

    useEffect(() => {
        finalWorkService.fetchFinalWorks().then((Response) => {
            var templateData =  Response.slice(0, 40);
              setFinalWorks(templateData)
          })
    }, [])


    return(
        <main>
            <div>
                <div id="searchForm">
                    <input type="text" placeholder={t('searchformPlaceholder')}/>
                    <img src={Search} alt="search icon" id="searchIcon"/> 
                    
                    <select>
                        <option value="Alles">{t('Alles')}</option>
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
                    finalWorks.map(x => {
                        return <Cassette data={x} key={x["id"]} ></Cassette>
                    })}  

                    
                </div>
                
            </div>
        </main>
       
    )
}
export default Body