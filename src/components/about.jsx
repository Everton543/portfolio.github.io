import React, { useState } from 'react';
import './about.css';
import me from '../images/me.png';
import DisplayPicture from './displayPicture';
function About(){
    return(
        <div className='aboutBorder'>
          <h1 className='center'>Everton Alves : Full-Stack Developer</h1>
            <div className='aboutContainer'>
                <h2 >About me: </h2>
                <p>I'm a Full-Stack Developer from Brazil. </p>
                <p>I can create websites, Android Apps and Games.</p>
                <p>Creating the appearance from a designer and the access for the database</p>
            </div>
            <DisplayPicture imgLink={me} containerClassName="aboutMeImageContainer" imgClassName={"aboutMeImage"}/>
        </div>
    );
}

export default About;