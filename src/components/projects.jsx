import React from "react";
import ProjectImageWindow from "./projectImageWindow";
import "./projectImageWindow.css";

function Projects({projectsList}){
    return(
      <div>
            <h2 className="center">Projects</h2>
            <div className="projectsWindowsContainer">
                {projectsList.map((project, index) => <ProjectImageWindow key={index} project={project}/>)}
            </div>
      </div>  
    );
}

export default Projects;