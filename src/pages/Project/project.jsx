import React, { useState } from 'react';
import Menu from "../../components/menu";
import * as model from '../../service/model';
import {useParams} from "react-router-dom";
import Text from "../../components/Text";
import DisplayPicture from '../../components/displayPicture';
import "./project.css";

function Project(){
    const id = useParams().id;
    const [project, setProject] = useState({title: "", id: "", link: "", pictureLinks: [{link: ""}], text: ""});    
    model.getProjectById(id, setProject);
    let texts = model.setTextToHTML(project.text);


    return(
        <div>
            <Menu />
            <h1 className='center'>{project.title}</h1>
            <div className='putMarginLeft'>{texts.map((text, index) => <Text key={index} text={text} /> )}</div>
            <div className='putMarginLeft'> <a href={project.link}>Visit the project</a></div>
            <div>{project.pictureLinks.map((link, index) => <DisplayPicture key={index} imgLink={link} containerClassName="imgContainer" imgClassName="img"/>)}</div>
        </div>
    );
}

export default Project;