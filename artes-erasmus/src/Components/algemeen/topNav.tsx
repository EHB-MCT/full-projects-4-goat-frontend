import react from 'React'
import '../../scss/topNav.scss'

export default function TopNav(){
    return(
        <header>
            <div id='title' className='gradient-text'>
                <h1 className='titleWebsite'>Artes Des Erasmus</h1>
            </div>
            <div id='flexNav'>
                <a href="#">Eindwerk uploaden</a>
                <a href="#">Stemmen</a>
            </div>
       
        </header>
    )
}