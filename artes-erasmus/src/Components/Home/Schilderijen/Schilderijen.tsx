import { useEffect, useState } from "react";
import Schilderij from "./Schilderij";
import Tag from "./Tag";
import "../../../scss/schilderijen.scss"

function Schilderijen(){
    const [tag, setTags] = useState<any>([])

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setTags(data));
    }, [])

    const test = tag
    return (
        <div className="artGallery">
            {test.map((titles: any) => {
                return (
                    <div className="artCont">
                        <Schilderij/>
                        <Tag title={titles.title} author={titles.id}/>
                    </div>
                )
            })}
        </div>
    ) 
}

export default Schilderijen