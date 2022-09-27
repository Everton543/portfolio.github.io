import React, { useState } from 'react';
import Projects from '../../components/projects';
import Menu from '../../components/menu';
import * as model from '../../service/model';

import "../../components/texts.css";
import "../../components/index.css";

function ProjectsPage(){
    const [projectsList, setProjectList] = useState([{title: "", id: "", link: "", pictureLinks: [{link: ""}], text: ""}]);
    model.getProjectsList(setProjectList);

    return(
        <div>
          <Menu />
          <h1 className='center'>My Projects</h1>
          <Projects projectsList={projectsList} />
        </div>
    );
}

export default ProjectsPage;