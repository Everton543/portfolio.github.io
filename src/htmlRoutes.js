import React from 'react';
import {HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Login from './pages/Login/login';
import Administrar from './pages/Administrar/administrar';
import Project from './pages/Project/project';
import ProjectsPage from './pages/Projects/projects';


function HtmlRoutes(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/administrar" element = {<Administrar />} />
                <Route path="/Project/:id" element={<Project />} />  
                <Route path="/Projects" element = {<ProjectsPage />} />
                           
            </Routes>
        </HashRouter>
    );
}

export default HtmlRoutes;
