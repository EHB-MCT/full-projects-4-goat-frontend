import { useEffect, useState } from 'react'
import '../../SCSS/cassette.scss'
import side_1 from '../../Assets/side_1.png'
import side_2 from '../../Assets/side_2.png'
import side_3 from '../../Assets/side_3.png'

export default function Cassette(){

    const [cassette, setCassette] = useState(String)

    useEffect(() => {

        var number = Math.floor(Math.random() * (3 - 1 + 1)) + 1

        if(number === 1){
            setCassette(side_1)
        } else if (number === 2) {
            setCassette(side_2)
        } else if (number === 3) {
            setCassette(side_3)
        }
    }, [])


    return (
        <div className="cassette">
             <img src={cassette} alt="cassete" />
        </div>
       
    )
}