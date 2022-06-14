import { Link } from 'react-router-dom';
import Logo from '../../Assets/Final-Show-Logo.svg';
import Animation from "../../Assets/finalshow_logo_animation_2.gif"
import '../../SCSS/Button.scss';
import '../../SCSS/Nav.scss';

function Nav(){
    return(
        <div>
            <section className="navContainer">
                <Link to="/" className='routingLinks'>
                    <img className='logoFinalGroot static' src={Logo} alt="logo-final-show" />
                    <img id="activeGif" src={Animation} alt="animation-logo"/>
                </Link>

                <div className='ButtonsNav'>
                    <button className='uploadenBtn btn'><Link to="/results" className='routingLinks'>Resultaten</Link></button>
                    <button className='stemmenBtn btn'>Uploaden</button>
                    <button className='searchBtn btn'>Stemming</button>
                </div>
            </section>
            <section className="top-nav">
                <div className='logoFinal' >
                    <img src={Logo} alt="logo-final-show" />
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <Link to="/genomineerden" className='routingLinks'><li><button className='btn btnMobile'>Genomineerden</button></li></Link>
                    <Link to="/winnaars" className='routingLinks'><li><button className='btn btnMobile'>Winnaars</button></li></Link>
                    <li><button className='btn btnMobile'>Uploaden</button></li>
                    <li><button className='btn btnMobile'>Stemming</button></li>
                </ul>
            </section>
        </div>
    )
}

export default Nav