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

import phone from '../../../../Assets/phone.png';
import mail from '../../../../Assets/email.png';
import linkedin from '../../../../Assets/linkedin.png';
import instagram from '../../../../Assets/instagram.png';

import "../../../../SCSS/_sharedDetailsWeb.scss";
import Slider from "../Slider";

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
            <div className="FullCassetteCoverSideDetail">
                <div className="CassetteStylingDetail">
                    <img className="CassetteStylingDetailCover" src={cover} alt="cover" />
                    <img className="CassetteStylingDetailSide" src={cassette} alt="side" />
                    <img className="CassetteStylingDetailCover" src={cover} alt="cover" />
                </div>  
                <div className="leftCoverDetail">
                    <div id="stripeCluster">
                        <h3 className={clusterClass}>{cluster}</h3>
                    </div>

                    <h1 id="projectArtist">{props.data.user.map((users:any) =>{
                        return users.name
                    })}</h1> 
                    <div id="projectName">
                        <h5 className='projectPlaceHolder'>PROJECT:</h5>
                        <p className='nameProject'>{props.data.title}</p>
                    </div>

                    <div className="sliderContainer">
                        <Slider data={props.data}/> 
                    </div>
                    
                    
                </div> 


                <div className="rightCoverDetail">
                    <h3>PROJECTBESCHRIJVING</h3>
                    <p className="beschrijvingShare">{props.data.description}</p>
                    
                    <div id="personalInfo" className="infoPersonalShareContainer">
                        <div id="contactInfoContainer">
                            <div id="mail" className='infoFlex shareInfoFlex'>
                                <img src={mail} alt="mail icon" className='socialIcon shareIconDetail'/>
                                <p className='mailAdres invulText shareWebText'>{props.data.user.map((users:any) =>{
                                    return users.email
                                })}</p>
                            </div>
                                {props.data.socials.map((social:any) => {
                                    return(
                                        <div>
                                            <div className='infoFlex shareInfoFlex'>
                                                <img src={phone} alt="phone icon" className='socialIcon shareIconDetail'/>
                                                <p className='invulText shareWebText'>+32 {social.tel}</p>
                                            </div>
                                            <div id="linkedIn" className='infoFlex shareInfoFlex'>
                                            <img src={linkedin} alt="linkedin icon" className='socialIcon shareIconDetail'/>
                                                <p className='invulText shareWebText'>{social.linkedin}</p>
                                            </div>
                                            <div id="Instagram" className='infoFlex shareInfoFlex'>
                                            <img src={instagram} alt="instagram icon" className='socialIcon shareIconDetail'/>
                                                <p className='invulText shareWebText'>{social.instagram}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>  

                        </div>
                
                </div>
                {/* <div className="sideDetail">test</div> */}

          
            </div>
           
             
            :
      
            <p>Loading...</p>
        }
         

    </div>
    )
}