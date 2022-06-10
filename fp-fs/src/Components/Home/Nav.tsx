import Logo from '../../Assets/Final-Show-Logo.png'
import '../../SCSS/Button.scss'

function Nav(){
    return(
        <div className="navContainer">
            <img src={Logo} alt="logo-final-show" />
            <button className='uploadenBtn btn'>Uploaden</button>
            <button className='stemmenBtn btn'>Stemming</button>
            <button className='searchBtn btn'>Search</button>
        </div>
    )
}

export default Nav