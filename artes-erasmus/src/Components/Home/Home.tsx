import Schilderijen from "./Schilderijen/Schilderijen";
import TopNav from "../algemeen/topNav";
import DetailPage from "../Detail/DetailPage";
import SideNav from './SideNav'


function Home(){

    return (
        <div>
            <TopNav/>
            <SideNav/>
            <DetailPage/>
            <Schilderijen/>
        </div>
    )
}

export default Home