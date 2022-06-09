import Schilderijen from "./Schilderijen/Schilderijen";
import TopNav from "../algemeen/topNav";
import ImageSlider from "../Detail/ImageSlider";

function Home(){

    return (
        <div>
            <TopNav/>
            {/* <Schilderijen/> */}
            <ImageSlider/>
        </div>
    )
}

export default Home