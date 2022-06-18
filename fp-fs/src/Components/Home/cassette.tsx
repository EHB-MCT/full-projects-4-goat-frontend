import { useEffect, useState } from 'react';
import '../../SCSS/cassette.scss';
import '../../SCSS/DetailSide.scss';
import side_1 from '../../Assets/side_1.png';
import side_2 from '../../Assets/side_2.png';
import side_3 from '../../Assets/side_3.png';
import side_4 from '../../Assets/side_4.png';
import side_5 from '../../Assets/side_5.png';


import DetailSide from './details/detailSide';
import { Link } from 'react-router-dom';

export default function Cassette(props: any){

    const [cassette, setCassette] = useState(String)
    const [cassetteNumber, setCassetteNumber] = useState(Number)
    const [styling, setStyle] = useState(String)
    const [cluster, setCluster] = useState(String)
    const [showSide, setShowSide] = useState(Boolean)

    useEffect(() => {

        setShowSide(false)

        var number = Math.floor(Math.random() * (5 - 1 + 1)) + 1

        if(number === 1){
            setCassette(side_1)
            setCassetteNumber(1)
            setStyle('white')
        } else if (number === 2) {
            setCassette(side_2)
            setCassetteNumber(2)
            setStyle("black")
        } else if (number === 3) {
            setCassette(side_3)
            setCassetteNumber(3)
            setStyle("white")
        }  else if (number === 4) {
            setCassette(side_4)
            setCassetteNumber(4)
            setStyle("white")
        }   else if (number === 5) {
            setCassette(side_5)
            setCassetteNumber(5)
            setStyle("white")
        } 

        if(props.data.cluster === "web" || props.data.cluster === "webApp"){
            setCluster("Web")
        } else if (props.data.cluster === "interactiveMotion" || props.data.cluster === "motion") {
            setCluster("Motion")
        } else if (props.data.cluster === "digitalMaking" || props.data.cluster === "smartTechnologies") {
            setCluster("Smart")
        }  else if (props.data.cluster === "alternativeReality" || props.data.cluster === "extendedReality") {
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
        <div className='cassetteComplete'>
            <Link to="/detail" state={props.data}>
            <div className='fullCassetteMob'>
                <div className="cassette">
                    <div className='cassetteNameDiv'>
                        <h1 className='cassetteName' style={{'color': styling}}>{props.data.title}</h1>
                    </div>
                    <img src={cassette} alt="cassette" className='imgCassette'/>
                    <div className='clusterColors'>
                        <div className={cluster}></div>
                        <div className={cluster}></div>
                    </div>
                </div>
            </div>
            </Link> 

            <div className='fullCassetteWeb'>
                <div  className={showSide? 'cassette cassetteOpenAnimation': "cassette cassetteClosedAnimation"} onClick={changeShowSide}>
                    <div className='cassetteNameDiv'>
                        <h1 className='cassetteName' style={{'color': styling}}>{props.data.title}</h1>
                    </div>
                    <img src={cassette} alt="cassette" className='imgCassette'/>
                    <div className='clusterColors'>
                        <div className={cluster}></div>
                        <div className={cluster}></div>
                    </div>
                </div>
                {showSide? <DetailSide data={props.data} cassette={{cassetteNumber}}></DetailSide>: <p></p>}
            </div>
        </div>       
    )
}