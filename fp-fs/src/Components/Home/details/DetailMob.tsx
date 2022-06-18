import share from '../../../Assets/share_logo.png';
import cross from '../../../Assets/cross_logo.png';
import '../../../SCSS/DetailSide.scss';
import ImageSlider from './ImageSlider';
import { useNavigate, useLocation } from 'react-router-dom';
import phone from '../../../Assets/phone.png';
import mail from '../../../Assets/email.png';
import linkedin from '../../../Assets/linkedin.png';
import instagram from '../../../Assets/instagram.png';
import Slider from './Slider';


export default function DetailMob(props: any) {

    const navigate = useNavigate()

    const location = useLocation();
    const state:any = location.state;
    

    return (
        <div className='detailPageContainer'>
            <div id="stripeClusterMob">
                <h3 className='clusterNameMob'>{state.cluster}</h3>
                <div onClick={() => navigate(-1)}className='routingLinks'><img src={cross} alt="closing-img" id="cross"/></div>
            </div>

            <h1 id="projectArtistMob">{state.user.map((users:any) =>{
                return users.name
            })}</h1>
            <div id="projectNameMob">
                <h5 className='projectPlaceHolderMob'>PROJECT:</h5>
                <p className='nameProjectMob'>{state.title}</p>
            </div>
            
            <Slider data={state}/>

            <h3 className='beschrijvingPlaceholderMob'>PROJECTBESCHRIJVING</h3>
            <p className='beschrijvingMob'>{state.description}</p>

            <div id="personalInfoMob">
                <div id="contactInfoContainerMob">
                    {state.socials.map((social:any) => {
                        return(
                            <div>
                                <div className='infoFlexMob'>
                                    <img src={phone} alt="phone icon" className='socialIcon'/>
                                    <p className='invulTextMob'>{social.tel}</p>
                                </div>
                                <div id="maiMobl" className='infoFlexMob'>
                                <img src={mail} alt="mail icon" className='socialIcon'/>
                                    <p className='mailAdresMob invulTextMob'>{state.user.map((users:any) =>{
                                        return users.email
                                    })}</p>
                                </div>
                                <div id="linkedInMob" className='infoFlexMob'>
                                <img src={linkedin} alt="linkedin icon" className='socialIcon'/>
                                    <p className='invulTextMob'>{social.linkedin}</p>
                                </div>
                                <div id="InstagramMob" className='infoFlexMob'>
                                <img src={instagram} alt="instagram icon" className='socialIcon'/>
                                    <p className='invulTextMob'>{social.instagram}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id="shareContainerMob">
                <img src={share} alt="share-icon" id="shareIconMob"/>
            </div>
        </div>
    )
}
