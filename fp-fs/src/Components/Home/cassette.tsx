import { useEffect, useState } from 'react'
import '../../SCSS/cassette.scss'
import side_1 from '../../Assets/side_1.png'
import side_2 from '../../Assets/side_2.png'
import side_3 from '../../Assets/side_3.png'
import side_4 from '../../Assets/side_4.png'
import side_5 from '../../Assets/side_5.png'
import side_6 from '../../Assets/side_6.png'

export default function Cassette(props: any){

    const [cassette, setCassette] = useState(String)
    const [cluster, setCluster] = useState(String)

    useEffect(() => {

        var number = Math.floor(Math.random() * (6 - 1 + 1)) + 1

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
        }  else if (number === 6) {
            setCassette(side_6)
        }

        var numberCluster = Math.floor(Math.random() * (4 - 1 + 1)) + 1

        if(numberCluster === 1){
            setCluster("Web")
        } else if (numberCluster === 2) {
            setCluster("Motion")
        } else if (numberCluster === 3) {
            setCluster("Smart")
        }  else if (numberCluster === 4) {
            setCluster("Reality")
        }

    }, [])





    return (
        <div className="cassette">
            <div className='cassetteNameDiv'>
                <h1 className='cassetteName'>{props.data.title}</h1>
            </div>
             <img src={cassette} alt="cassete" />
            <div className='clusterColors'>
                <div className={cluster}></div>
                <div className={cluster}></div>
            </div>
        </div>
       
    )
}