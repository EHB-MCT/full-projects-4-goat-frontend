import { useState } from 'react';
import Logo from '../../Assets/Final-Show-Logo.svg'
import '../../SCSS/Button.scss'
import '../../SCSS/Nav.scss'

function Nav(){
    return(
        <div className="navContainer">
            <img className='logoFinal' src={Logo} alt="logo-final-show" />
            <div className='ButtonsNav'>
                <button className='uploadenBtn btn'>Uploaden</button>
                <button className='stemmenBtn btn'>Stemming</button>
                <button className='searchBtn btn'>Search</button>
            </div>
            <div className='hamburgerNav'>
            </div>
        </div>
    )
}

export default Nav