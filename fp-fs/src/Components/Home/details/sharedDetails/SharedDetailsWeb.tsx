import { useState, useEffect } from "react"
import side_1 from '../../../../Assets/side_1.png';
import side_2 from '../../../../Assets/side_2.png';
import side_3 from '../../../../Assets/side_3.png';
import side_4 from '../../../../Assets/side_4.png';
import side_5 from '../../../../Assets/side_5.png';
import cover_1 from '../../../../Assets/cover_1.png';
import cover_2 from '../../../../Assets/cover_2.png';
import cover_3 from '../../../../Assets/cover_3.png';
import cover_4 from '../../../../Assets/cover_4.png';
import cover_5 from '../../../../Assets/cover_5.png';

export default function SharedDetailWeb(props:any){
    var [loading, setLoading] = useState(Boolean) 
    const [cluster, setCluster] = useState(String)
    const [clusterClass, setClusterClass] = useState(String)
    const [cassette, setCassette] = useState(String)
    const [cover, setCover] = useState(String)
    const [styling, setStyle] = useState(String)

    useEffect(() => {
        setLoading(false)
        if(props.data !== undefined){
            setLoading(true)

            
        if(props.data.cluster === "web" || props.data.cluster === "webApp"){
            setCluster("Web en App")
            setClusterClass("clusterNameMob Web")
        } else if (props.data.cluster === "interactiveMotion" || props.data.cluster === "motion") {
            setCluster("Motion")
            setClusterClass("clusterNameMob Motion")
        } else if (props.data.cluster === "digitalMaking" || props.data.cluster === "smartTechnologies") {
            setCluster("Smart Technologies")
            setClusterClass("clusterNameMob Smart")
        }  else if (props.data.cluster === "alternativeReality" || props.data.cluster === "extendedReality") {
            setCluster("Extended Reality")
            setClusterClass("clusterNameMob Reality")
        }

        
        var number = Math.floor(Math.random() * (5 - 1 + 1)) + 1

        if(number === 1){
            setCassette(side_1)
            setCover(cover_1)
            setStyle('white')
        } else if (number === 2) {
            setCassette(side_2)
            setCover(cover_2)
            setStyle("black")
        } else if (number === 3) {
            setCassette(side_3)
            setCover(cover_3)
            setStyle("white")
        }  else if (number === 4) {
            setCassette(side_4)
            setCover(cover_4)
            setStyle("white")
        }   else if (number === 5) {
            setCassette(side_5)
            setCover(cover_5)
            setStyle("white")
        } 


        }
    }, [loading, props.data])

    return (
        <div className='detailPageContainer'>
            {loading? 
            <div className="CassetteStylingDetail">               
                <img className="CassetteStylingDetailCover" src={cover} alt="cover" />
                <img className="CassetteStylingDetailSide" src={cassette} alt="side" />
                <img className="CassetteStylingDetailCover" src={cover} alt="cover" />
          
            </div>
           
             
            :
      
            <p>Loading...</p>
        }
         

    </div>
    )
}