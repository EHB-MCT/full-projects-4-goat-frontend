import share from '../../../Assets/share_logo.png'
import '../../../SCSS/DetailSide.scss'
import ImageSlider from './ImageSlider'


export default function DetailMob(props: any) {

    return (
        <div className='detailPageContainer'>
            <div id="stripeCluster">
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
                <div id="stripeContact"></div>
                <div id="imgContact"></div>
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
    )
}
