import React, { useState } from 'react';
import Menu from '../../components/menu';
import About from '../../components/about';
import Technologies from '../../components/technologies';
import Projects from '../../components/projects';
import * as model from '../../service/model';

import "../../components/texts.css";
import "../../components/index.css";

function Main(){
    const [techList, setTechList] = useState([{name: ""}]);
    model.getTechnologiesList(setTechList);
    const [projectsList, setProjectList] = useState([{title: "", id: "", link: "", pictureLinks: [{link: ""}], text: ""}]);
    model.getProjectsList(setProjectList);
    return (
        <div>
          <Menu />
          <About />
          <Projects projectsList={projectsList} />
          <Technologies technologiesList={techList} />
        </div>
    );
}

export default Main;