import "../styles/Project.css";
function Project(props){
    let title = props.title;
    let bgImage = props.imgURL;
    let content = props.content;
    let usedThings = props.used;

    if(title && bgImage && content && usedThings){ // if we have all four props set, we generate the project
        return(
            <div className={"projectDiv"}>
                <div className={"bgHolder"} style={{backgroundImage: `url(${bgImage})`}}></div>
                <div className={"projectContentHolder"}>
                    <h1>{title}</h1>
                    <p className={"usedTechs"}>{usedThings}</p>
                    <p className={"projectDescription"}>{content}</p>
                </div>
            </div>
        );
    }
    else{ // otherwise, we skip over this filler project and don't display it
        return("");
    }

}

export default Project;