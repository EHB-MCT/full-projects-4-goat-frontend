import { useEffect, useState } from 'react'
import '../../SCSS/cassette.scss'
import side_1 from '../../Assets/side_1.png'
import side_2 from '../../Assets/side_2.png'
import side_3 from '../../Assets/side_3.png'
import side_4 from '../../Assets/side_4.png'
import side_5 from '../../Assets/side_5.png'

export default function Cassette(props: any){

    const [cassette, setCassette] = useState(String)

    useEffect(() => {

        var number = Math.floor(Math.random() * (5 - 1 + 1)) + 1

        if(number === 1){
            setCassette(side_1)
        } else if (number === 2) {
            setCassette(side_2)
        } else if (number === 3) {
            setCassette(side_3)
        }  else if (number === 4) {
            setCassette(side_4)
        }   else if (number === 5) {
            setCassette(side_5)
        }
    }, [])


    return (
        <div className="cassette">
            <div className='cassetteNameDiv'>
                <h1 className='cassetteName'>{props.data.title}</h1>
            </div>
             <img src={cassette} alt="cassete" />
        </div>
       
    )
}