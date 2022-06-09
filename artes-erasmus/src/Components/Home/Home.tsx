import Schilderijen from "./Schilderijen/Schilderijen";
import TopNav from "../algemeen/topNav";
import DetailPage from "../Detail/DetailPage";
import "../../scss/Modal.scss"

function Home(){

    return (
        <div>
            <TopNav/>
            <Schilderijen/>
        </div>
    )
}

export default Home