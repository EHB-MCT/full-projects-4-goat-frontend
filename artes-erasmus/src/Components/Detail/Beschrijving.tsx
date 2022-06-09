import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/beschrijving.scss";
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function Beschrijving(){
    return(
        <div className="descriptionCont">
            <FontAwesomeIcon icon={faHeart} className="heartIcon" size="4x"/>
            <div className="mainInfo">
                <h3 className="titleProjectD">Lincoln</h3>
                <h4 className="authorProjectD">Henk De Steen</h4>
            </div>
            <div className="sideInfo">
                <p className="descriptionProject">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Malesuada fames ac turpis egestas sed. Iaculis eu non diam phasellus vestibulum lorem sed. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Quam vulputate dignissim suspendisse in est ante in. Platea dictumst quisque sagittis purus. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Malesuada proin libero nunc consequat interdum varius sit amet. Mattis nunc sed blandit libero volutpat sed cras ornare. In eu mi bibendum neque egestas congue. Ac tincidunt vitae semper quis lectus nulla. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Gravida arcu ac tortor dignissim convallis aenean. Eget nunc scelerisque viverra mauris in aliquam sem.

Tempor orci dapibus ultrices in iaculis. Ornare massa eget egestas purus viverra. Accumsan sit amet nulla facilisi morbi tempus. Feugiat vivamus at augue eget arcu dictum varius duis at. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Risus viverra adipiscing at in. Mattis nunc sed blandit libero volutpat sed cras. Ultrices eros in cursus turpis. Ut consequat semper viverra nam libero justo laoreet sit amet. Aliquet enim tortor at auctor. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Id porta nibh venenatis cras. Neque viverra justo nec ultrices. Ac odio tempor orci dapibus ultrices in iaculis nunc. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Sociis natoque penatibus et magnis. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Sit amet aliquam id diam maecenas. Lacus suspendisse faucibus interdum posuere lorem.</p>
            </div>

        </div>
    )
}
export default Beschrijving