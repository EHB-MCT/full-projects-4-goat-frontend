import Schilderijen from "./Schilderijen/Schilderijen";
import TopNav from "../algemeen/topNav";
import DetailPage from "../Detail/DetailPage";

function Home(){

    return (
        <div>
            <TopNav/>
            {/* <Schilderijen/> */}
            <DetailPage/>
        </div>
    )
}

export default Home