import { useEffect, useState } from 'react'
import cover_1 from '../../../Assets/cover_1.png'
import cover_2 from '../../../Assets/cover_2.png'
import cover_3 from '../../../Assets/cover_3.png'
import cover_4 from '../../../Assets/cover_4.png'
import cover_5 from '../../../Assets/cover_5.png'
import cover_6 from '../../../Assets/cover_6.png'
import '../../../SCSS/DetailSide.scss'


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
    <div>
        <img src={cover} alt="" className='cover'/>

        <div className='onCoverElement'>
            <div id="stripeCluster">
                <h3>Motion</h3>
                <div id="colorStripe"></div>
            </div>
            <h1 id="projectArtist">Boutaârourte Yousra</h1>
            <div id="projectName">
                <h5>PROJECT</h5>
                <p>Autisme</p>
            </div>
            <span>Image Slider</span>
            
            <h3>PROJECTBESCHRIJVING</h3>
            <p>Ik was ooit verliefd en ben afgewezen, toen begon 
                ik maar aan deze richting. #SadStory. Ik was ooit verliefd en ben afgewezen, toen begon ik maar aan deze richting 
                #SadStory.  Ik was ooit verliefd en ben afgewezen, toen begon 
                ik maar aan deze richting. #SadStory. Ik was ooit verliefd en ben afgewezen, toen begon 
                ik maar aan deze richting 
                #SadStory. 
            </p>

            <div id="personalInfo">
                <span id="stripeContact"></span>
                <img src="../../../Assets/search.png" alt="profile-pick"/>
                <div id="contactInfoContainer">
                    <div id="tel">
                        <p>Tel:</p>
                        <p>0123456789</p>
                    </div>
                    <div id="mail">
                        <p>Mail:</p>
                        <p>yousra.boutaârourte@student.ehb.be</p>
                    </div>
                    <div id="linkedIn">
                        <p>LinkedIn:</p>
                        <p>Boutaârourte Yousra</p>
                    </div>
                    <div id="Instagram">
                        <p>LinkedIn:</p>
                        <p>@Boutaârourte_Yousra</p>
                    </div>
                    <span id="shareIcon"></span>
                </div>
            </div>
        </div>
    </div>
    )
}