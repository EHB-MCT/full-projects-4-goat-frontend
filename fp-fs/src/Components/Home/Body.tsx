import "../../SCSS/Body.scss";
import App from "../../Assets/Web&App.png";
import Motion from "../../Assets/Motion.png";
import Reality from "../../Assets/Extended-Reality.png";
import Smart from "../../Assets/Smart-Technologies.png";
import Cassette1 from "../../Assets/suspiria.svg";
import Cassette2 from "../../Assets/halloween.svg";
import Stripes from "./Stripes";

function Body(){
    return(
        <div className="bodyContainer">
            <Stripes/>
            <div className="cassettesContainer">
                <img className="cassette" src={Smart} alt="smart-technologies-cassette" />
                <img className="cassette" src={Motion} alt="motion-cassette" />
                <img className="cassette" src={Reality} alt="extended-reality-cassette" />
                <img className="cassette" src={App} alt="web-app-cassette" />
                <img className="cassette" src={Cassette1} alt="web-app-cassette" />
                <img className="cassette" src={Cassette2} alt="web-app-cassette" />
                <img className="cassette last" src={Cassette2} alt="web-app-cassette" />
            </div>
            
        </div>
    )
}
export default Body