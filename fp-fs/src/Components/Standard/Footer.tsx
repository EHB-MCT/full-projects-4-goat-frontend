import { useLocation } from 'react-router-dom';
import Erasmus from '../../Assets/logo-ehb-small.svg';
import '../../SCSS/Footer.scss';

function Footer(){

    const pathName = useLocation().pathname

    if(pathName === "/detail"){
        return null
    }

    return(
        <div className="footerContainer">
            <img className='footerImg' src={Erasmus} alt="erasmus-logo-black" />
        </div>
    )
}

export default Footer