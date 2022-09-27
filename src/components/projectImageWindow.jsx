import React from "react";
import DisplayPicture from "./displayPicture";
import "./projectImageWindow.css";

function ProjectImageWindow({project}){
    return(
        <div className="projectWindow">
            <h3 className="center">{project.title}</h3>
            <a href= {"/#/Project/" + project.id}>
                <DisplayPicture imgLink={project.pictureLinks[0]} containerClassName="projectImageWindow" imgClassName={"projectHighlightImage"}/>
            </a>
        </div>
    );
}

export default ProjectImageWindow;