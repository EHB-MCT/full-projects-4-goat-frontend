import Beschrijving from "./Beschrijving";
import "../../scss/imageslider.scss";
import ImageSlider from "./ImageSlider";

function DetailPage(){
    return(
        <div className="detailCont">
            <ImageSlider/>
            <Beschrijving/>
        </div>
    )
}

export default DetailPage