import { useEffect, useState } from 'react'
import cover_1 from '../../../Assets/cover_1.png'
import cover_2 from '../../../Assets/cover_2.png'
import cover_3 from '../../../Assets/cover_3.png'
import cover_4 from '../../../Assets/cover_4.png'
import cover_5 from '../../../Assets/cover_5.png'
import share from '../../../Assets/share_logo.png'
import '../../../SCSS/DetailSide.scss'
import ImageSlider from './ImageSlider'
import phone from '../../../Assets/phone.png'
import mail from '../../../Assets/email.png'
import linkedin from '../../../Assets/linkedin.png'
import instagram from '../../../Assets/instagram.png'

export default function DetailSide(props: any) {

    const [cover, setCover] = useState(String)

    useEffect(() => {
    
        if (props.cassette.cassetteNumber === 1){
            setCover(cover_1)
        }else if (props.cassette.cassetteNumber === 2){
            setCover(cover_2)
        } else if (props.cassette.cassetteNumber === 3){
            setCover(cover_3)
        }else if (props.cassette.cassetteNumber === 4){
            setCover(cover_4)
        }else if (props.cassette.cassetteNumber === 5){
            setCover(cover_5)
        }
    }, [])


    return (
    <div className='detailContainer'>
        <img src={cover} alt="" className='cover'/>

        <div className='onCoverElement'>
            <div id="stripeCluster">
                {/* <div id="colorStripe"></div> */}
                <h3 className='clusterName'>Motion</h3>
            </div>

            <h1 id="projectArtist">Boutaârourte Yousra</h1>
            <div id="projectName">
                <h5 className='projectPlaceHolder'>PROJECT:</h5>
                <p className='nameProject'>Autisme</p>
            </div>

            <ImageSlider/>

            <h3 className='beschrijvingPlaceholder'>PROJECTBESCHRIJVING</h3>
            <p className='beschrijving'>Ik was ooit verliefd en ben afgewezen, toen begon 
            ik maar aan deze richting. #SadStory. Ik was ooit verliefd en ben afgewezen, toen begon ik maar aan deze richting 
            #SadStory.  
            </p>

            <div id="personalInfo">
                <div id="contactInfoContainer">
                    <div className='infoFlex'>
                        <img src={phone} alt="phone icon" className='socialIcon'/>
                        <p className='invulText' >0123456789</p>
                    </div>
                    <div id="mail" className='infoFlex'>
                    <img src={mail} alt="mail icon" className='socialIcon'/>
                        <p className='mailAdres invulText'>yousra.boutaârourte@gmail.com</p>
                    </div>
                    <div id="linkedIn" className='infoFlex'>
                    <img src={linkedin} alt="linkedin icon" className='socialIcon'/>
                        <p className='invulText'>Boutaârourte Yousra</p>
                    </div>
                    <div id="Instagram" className='infoFlex'>
                    <img src={instagram} alt="instagram icon" className='socialIcon'/>
                        <p className='invulText'>@Boutaârourte_Yousra</p>
                    </div>
                </div>

            </div>
            <div id="shareContainer">
                <img src={share} alt="share-icon" id="shareIcon"/>
            </div>

        </div> 
    </div>
    )
}
