import { useState, useEffect } from "react"

export default function SharedDetailWeb(props:any){
    var [loading, setLoading] = useState(Boolean) 
    const [cluster, setCluster] = useState(String)
    const [clusterClass, setClusterClass] = useState(String)

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
        }
    }, [loading, props.data])

    return (
        <div className='detailPageContainer'>
            {loading? 
            <div>               
                {props.data.title}
            </div>
           
             
            :
      
            <p>Loading...</p>
        }
         

    </div>
    )
}