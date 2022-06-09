import react from 'React'
import '../../scss/sidenav.scss'
import Collection from '../../Assets/collection-badge.png'
import Web from '../../Assets/web-badge-2.png'
import Motion from '../../Assets/motion-badge-2.png'
import Mobile from '../../Assets/mobile-badge-2.png'
import Game from '../../Assets/game-badge-2.png'
import Digital from '../../Assets/digital-badge-2.png'

export default function sideNav(){

    return (
        <div id='sideNav'>
              <a href="#">
               <img className='sideButtonsImage' src={Collection} alt="EveryIcon" />
           </a>
           <a href="#">
               <img className='sideButtonsImage' src={Web} alt="WebIcon" />
           </a>
           <a href="#">
               <img className='sideButtonsImage' src={Motion} alt="MotionIcon" />
           </a>
           <a href="#">
               <img className='sideButtonsImage' src={Mobile} alt="MobileIcon" />
           </a>
           <a href="#">
               <img className='sideButtonsImage' src={Game} alt="GameIcon" />
           </a>
           <a href="#" >
               <img className='sideButtonsImage' src={Digital} alt="DigitalIcon" />
           </a>
        </div>
    )
}

