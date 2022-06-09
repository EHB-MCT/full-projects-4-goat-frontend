import Web from "../../Assets/web-badge-2.png"
import Motion from "../../Assets/motion-badge-2.png"
import Mobile from "../../Assets/mobile-badge-2.png"
import Digital from "../../Assets/digital-badge-2.png"
import Game from "../../Assets/game-badge-2.png"
import Nachtwacht from "../../Assets/Nachtwacht.jpg"
import "../../scss/imageslider.scss"

function ImageSlider(){
    return(
        <div className="imageCont">
            <img src={Nachtwacht} alt="image-project" />

            <div className="previewImagesCont">
                <img src={Nachtwacht} alt="image-project" />
                <img src={Nachtwacht} alt="image-project" />
                <img src={Nachtwacht} alt="image-project" />
                <img src={Nachtwacht} alt="image-project" />
                <img src={Nachtwacht} alt="image-project" />
            </div>
        </div>
    )
}

export default ImageSlider