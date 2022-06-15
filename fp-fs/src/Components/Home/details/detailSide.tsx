import { useEffect, useState } from 'react'
import cover_1 from '../../../Assets/cover_1.png'
import cover_2 from '../../../Assets/cover_2.png'
import cover_3 from '../../../Assets/cover_3.png'
import cover_4 from '../../../Assets/cover_4.png'
import cover_5 from '../../../Assets/cover_5.png'
import cover_6 from '../../../Assets/cover_6.png'
import share from '../../../Assets/share_logo.png'
import '../../../SCSS/DetailSide.scss'
import ImageSlider from './ImageSlider'


export default function DetailSide(props: any) {

    const [cover, setCover] = useState(String)

    useEffect(() => {

        console.log(props.cassette.cassetteNumber)
    
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
        }else if (props.cassette.cassetteNumber === 6){
            setCover(cover_6)
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
                {/* <div id="stripeContact"></div> */}
                <div id="imgContact"></div>
                {/* <img src="../../../Assets/search.png" alt="profile-pick"/> */}
                <div id="contactInfoContainer">
                    <div className='infoFlex'>
                        <p className='placeText'>Tel:</p>
                        <p className='invulText' >0123456789</p>
                    </div>
                    <div id="mail" className='infoFlex'>
                        <p className='mailPlaceholder placeText'>Mail:</p>
                        <p className='mailAdres invulText'>yousra.boutaârourte@gmail.com</p>
                    </div>
                    <div id="linkedIn" className='infoFlex'>
                        <p className='placeText'>LinkedIn:</p>
                        <p className='invulText'>Boutaârourte Yousra</p>
                    </div>
                    <div id="Instagram" className='infoFlex'>
                        <p className='placeText'>Instagram:</p>
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
