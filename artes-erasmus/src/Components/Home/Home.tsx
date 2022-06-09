import Schilderijen from "./Schilderijen/Schilderijen";
import TopNav from "../algemeen/topNav";
import DetailPage from "../Detail/DetailPage";
import "../../scss/Modal.scss"
import SideNav from './SideNav'

function Home(){

    return (
        <div>
            <TopNav/>
            <SideNav/>
            <Schilderijen/>
        </div>
    )
}

export default Home