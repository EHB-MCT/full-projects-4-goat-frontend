import '../../../SCSS/sharedDetail.scss'
import cross from '../../../Assets/cross_logo.png'
import finalLogo from '../../../Assets/Final-Show-Logo.svg'
import ehbLogo from '../../../Assets/logo-ehb-small-white.svg'
import { Link } from 'react-router-dom'

export default function SharedDetail(){
    return(
        <div id='backgroundRaster'>
            <img src={finalLogo} alt="" id='finalLogoSharedVersion'/>
            <img src={ehbLogo} alt="" id='ehbLogoSharedVersion'/>
            <div id='cassetteBackgroundShared'>
            <Link to={"/"}><img src={cross} alt="closing-img" id="crossShared"/></Link>
            </div>
        </div>
    )
}