import Beschrijving from "./Beschrijving";
import "../../scss/imageslider.scss";
import ImageSlider from "./ImageSlider";
import "../../scss/detailpage.scss"

function DetailPage(){
    return(
        <div className="detailCont">
            <ImageSlider/>
            <Beschrijving/>
        </div>
    )
}

export default DetailPage