import Logo from '../../Assets/Final-Show-Logo.png'
import '../../SCSS/Button.scss'
import '../../SCSS/Nav.scss'

function Nav(){
    return(
        <div className="navContainer">
            <img className='logoFinal' src={Logo} alt="logo-final-show" />
            <button className='uploadenBtn btn'>Uploaden</button>
            <button className='stemmenBtn btn'>Stemming</button>
            <button className='searchBtn btn'>Search</button>
        </div>
    )
}

export default Nav