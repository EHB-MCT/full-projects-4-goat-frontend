import share from '../../../Assets/share_logo.png'
import '../../../SCSS/DetailSide.scss'
import ImageSlider from './ImageSlider'


export default function DetailMob(props: any) {

    return (
        <div className='detailPageContainer'>
            <div id="stripeClusterMob">
                <h3 className='clusterNameMob'>Motion</h3>
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
                <div id="stripeContactMob"></div>
                <div id="imgContactMob"></div>
                <div id="contactInfoContainerMob">
                    <div className='infoFlexMob'>
                        <p className='placeTextMob'>Tel:</p>
                        <p className='invulTextMob' >0123456789</p>
                    </div>
                    <div id="maiMobl" className='infoFlexMob'>
                        <p className='mailPlaceholderMob placeTextMob'>Mail:</p>
                        <p className='mailAdresMob invulTextMob'>yousra.boutaârourte@gmail.com</p>
                    </div>
                    <div id="linkedInMob" className='infoFlexMob'>
                        <p className='placeTextMob'>LinkedIn:</p>
                        <p className='invulTextMob'>Boutaârourte Yousra</p>
                    </div>
                    <div id="InstagramMob" className='infoFlexMob'>
                        <p className='placeTextMob'>Instagram:</p>
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
