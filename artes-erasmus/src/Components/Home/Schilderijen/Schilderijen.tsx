import { useEffect, useState } from "react";
import Schilderij from "./Schilderij";
import Tag from "./Tag";
import "../../../scss/schilderijen.scss"
import DetailPage from "../../Detail/DetailPage";

function Schilderijen(){
    const [tag, setTags] = useState<any>([])

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

  const closeModal = () => {
    setIsOpen(false);
  }

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setTags(data));
    }, [])

    const test = tag
    return (
        <div className="modalCont">
            {isOpen && (
                <>
                <div className="overlay"></div>
                <div className="modal">
                    <div className="modalHeader">
                    {/* <h2>Modal Title</h2> */}
                        <button onClick={closeModal} className="close-button">&times;</button>
                    </div>
                    <main className="modal__main">
                        <DetailPage/>
                    {/* <p>Some content here!</p> */}
                    </main>
                </div>
                </>
            )}

            <div className="artGallery">
                {test.map((titles: any) => {
                    return (
                        <button className="button" onClick={openModal}>
                            <div className="artCont">
                                <Schilderij/>
                                <Tag title={titles.title} author={titles.id}/>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    ) 
}

export default Schilderijen