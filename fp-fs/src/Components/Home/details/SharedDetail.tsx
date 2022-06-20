import '../../../SCSS/sharedDetail.scss'
import cross from '../../../Assets/cross_logo.png'
import finalLogo from '../../../Assets/Final-Show-Logo.svg'
import ehbLogo from '../../../Assets/logo-ehb-small-white.svg'

export default function SharedDetail(){
    return(
        <div id='backgroundRaster'>
            <img src={finalLogo} alt="" id='finalLogoSharedVersion'/>
            <img src={ehbLogo} alt="" id='ehbLogoSharedVersion'/>
             <div className='routingLinks'><img src={cross} alt="closing-img" id="crossShared"/></div>
        </div>
    )
}