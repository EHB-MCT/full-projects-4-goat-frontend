import share from '../../../Assets/share_logo.png'
import cross from '../../../Assets/cross_logo.png'
import '../../../SCSS/DetailSide.scss'
import ImageSlider from './ImageSlider'
import { Link } from 'react-router-dom'
import phone from '../../../Assets/phone.png'
import mail from '../../../Assets/email.png'
import linkedin from '../../../Assets/linkedin.png'
import instagram from '../../../Assets/instagram.png'


export default function DetailMob(props: any) {

    return (
        <div className='detailPageContainer'>
            <div id="stripeClusterMob">
                <h3 className='clusterNameMob'>Motion</h3>
                <Link to="/results" className='routingLinks'><img src={cross} alt="closing-img" id="cross"/></Link>
            </div>

            <h1 id="projectArtistMob">Boutaârourte Yousra</h1>
            <div id="projectNameMob">
                <h5 className='projectPlaceHolderMob'>PROJECT:</h5>
                <p className='nameProjectMob'>Autisme</p>
            </div>

            <ImageSlider/>

            <h3 className='beschrijvingPlaceholderMob'>PROJECTBESCHRIJVING</h3>
            <p className='beschrijvingMob'>Ik was ooit verliefd en ben afgewezen, toen begon 
                ik maar aan deze richting. #SadStory. Ik was ooit verliefd en ben afgewezen, toen begon ik maar aan deze richting 
                #SadStory.  
            </p>

            <div id="personalInfoMob">
                <div id="contactInfoContainerMob">
                    <div className='infoFlexMob'>
                        <img src={phone} alt="phone icon" className='socialIcon'/>
                        <p className='invulTextMob' >0123456789</p>
                    </div>
                    <div id="maiMobl" className='infoFlexMob'>
                    <img src={mail} alt="mail icon" className='socialIcon'/>
                        <p className='mailAdresMob invulTextMob'>yousra.boutaârourte@gmail.com</p>
                    </div>
                    <div id="linkedInMob" className='infoFlexMob'>
                    <img src={linkedin} alt="linkedin icon" className='socialIcon'/>
                        <p className='invulTextMob'>Boutaârourte Yousra</p>
                    </div>
                    <div id="InstagramMob" className='infoFlexMob'>
                    <img src={instagram} alt="instagram icon" className='socialIcon'/>
                        <p className='invulTextMob'>@Boutaârourte_Yousra</p>
                    </div>
                </div>
            </div>
            <div id="shareContainerMob">
                <img src={share} alt="share-icon" id="shareIconMob"/>
            </div>
        </div>
    )
}
