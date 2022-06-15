import { useEffect, useState } from 'react'
import '../../SCSS/cassette.scss'
import '../../SCSS/DetailSide.scss'
import side_1 from '../../Assets/side_1.png'
import side_2 from '../../Assets/side_2.png'
import side_3 from '../../Assets/side_3.png'
import side_4 from '../../Assets/side_4.png'
import side_5 from '../../Assets/side_5.png'
import side_6 from '../../Assets/side_6.png'

import DetailSide from './details/detailSide'
import DetailMob from './details/DetailMob'
import { Link } from 'react-router-dom'

export default function Cassette(props: any){

    const [cassette, setCassette] = useState(String)
    const [cassetteNumber, setCassetteNumber] = useState(Number)
    const [cluster, setCluster] = useState(String)
    const [showSide, setShowSide] = useState(Boolean)

    useEffect(() => {

        setShowSide(false)

        var number = Math.floor(Math.random() * (6 - 1 + 1)) + 1

        if(number === 1){
            setCassette(side_1)
            setCassetteNumber(1)
        } else if (number === 2) {
            setCassette(side_2)
            setCassetteNumber(2)
        } else if (number === 3) {
            setCassette(side_3)
            setCassetteNumber(3)
        }  else if (number === 4) {
            setCassette(side_4)
            setCassetteNumber(4)
        }   else if (number === 5) {
            setCassette(side_5)
            setCassetteNumber(5)
        }  else if (number === 6) {
            setCassette(side_6)
            setCassetteNumber(6)
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

    const changeShowSide = () => {
        if(showSide === false) {
            setShowSide(true)
        } else {
            setShowSide(false)
        }
       
    }




    return (
        <div>
            <Link to="/detail">
            <div className='fullCassetteMob'>
                <div className="cassette">
                    <div className='cassetteNameDiv'>
                        <h1 className='cassetteName'>{props.data.title}</h1>
                    </div>
                    <img src={cassette} alt="cassette" />
                    <div className='clusterColors'>
                        <div className={cluster}></div>
                        <div className={cluster}></div>
                    </div>
                </div>
            </div>
            </Link> 

            <div className='fullCassetteWeb'>
                <div className="cassette" onClick={changeShowSide}>
                    <div className='cassetteNameDiv'>
                        <h1 className='cassetteName'>{props.data.title}</h1>
                    </div>
                    <img src={cassette} alt="cassette" />
                    <div className='clusterColors'>
                        <div className={cluster}></div>
                        <div className={cluster}></div>
                    </div>
                </div>
                {showSide? <DetailSide cassette={{cassetteNumber}}></DetailSide>: <p></p>}
            </div>
        </div>       
    )
}