import "../../../scss/tag.scss"

function Tag(props: any){
    return(
        <div className="tagCont">
            <h5 className="titleProject">{props.title}</h5>
            <p className="authorPorject">{props.author}</p>
        </div>
    )
    
}

export default Tag