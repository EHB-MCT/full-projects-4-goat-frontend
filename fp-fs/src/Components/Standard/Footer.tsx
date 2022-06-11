import Erasmus from '../../Assets/logo-ehb-small.svg';
import '../../SCSS/Footer.scss';

function Footer(){
    return(
        <div className="footerContainer">
            <img className='footerImg' src={Erasmus} alt="erasmus-logo-black" />
        </div>
    )
}

export default Footer