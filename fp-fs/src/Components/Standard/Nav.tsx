import { useState } from 'react';
import Logo from '../../Assets/Final-Show-Logo.svg'
import '../../SCSS/Button.scss'
import '../../SCSS/Nav.scss'

function Nav(){
    return(
        <div>
            <section className="navContainer">
                <img className='logoFinalGroot' src={Logo} alt="logo-final-show" />
                <div className='ButtonsNav'>
                    <button className='uploadenBtn btn'>Resultaten</button>
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
                    <li>Resultaten</li>
                    <li>Uploaden</li>
                    <li>Stemming</li>
                </ul>
            </section>
        </div>
    )
}

export default Nav