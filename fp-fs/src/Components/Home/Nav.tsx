import { useState } from 'react';
import Logo from '../../Assets/Final-Show-Logo.svg'
import '../../SCSS/Button.scss'
import '../../SCSS/Nav.scss'

function Nav(){
    return(
        <div>
            <div className="navContainer">
                <img className='logoFinal' src={Logo} alt="logo-final-show" />
                <div className='ButtonsNav'>
                    <button className='uploadenBtn btn'>Uploaden</button>
                    <button className='stemmenBtn btn'>Stemming</button>
                    <button className='searchBtn btn'>Search</button>
                </div>
            </div>
            <section className="top-nav">
                <div className='logoFinal' >
                    <img src={Logo} alt="logo-final-show" />
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li>Uploaden</li>
                    <li>Stemming</li>
                    <li>Search</li>
                </ul>
            </section>
        </div>
        // <div>
        //     <div className="navContainer">
        //         <img className='logoFinal' src={Logo} alt="logo-final-show" />
        //         <div className='ButtonsNav'>
        //             <button className='uploadenBtn btn'>Uploaden</button>
        //             <button className='stemmenBtn btn'>Stemming</button>
        //             <button className='searchBtn btn'>Search</button>
        //         </div>
        //     </div>
        //     <div className='hamburgerNav'>
        //         <a href="" className="logo">CSS Nav</a>
        //         <input className="menu-btn" type="checkbox" id="menu-btn" />
        //         <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        //         <ul className="menu">
        //             <li><a href="#work">Our Work</a></li>
        //             <li><a href="#about">About</a></li>
        //             <li><a href="#careers">Careers</a></li>
        //             <li><a href="#contact">Contact</a></li>
        //         </ul>
        //         {/* <section className="top-nav">
        //             <div className='logoFinal' >
        //                 <img src={Logo} alt="logo-final-show" />
        //             </div>
        //             <input id="menu-toggle" type="checkbox" />
        //             <label className='menu-button-container' htmlFor="menu-toggle">
        //                 <div className='menu-button'></div>
        //             </label>
        //             <ul className="menu">
        //                 <li>Uploaden</li>
        //                 <li>Stemming</li>
        //                 <li>Search</li>
        //             </ul>
        //         </section> */}
        //     </div>
        // </div>
    )
}

export default Nav