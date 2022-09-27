import React, { useState } from 'react';
import Technology from './technology';
import './technology.css';

function Technologies({technologiesList}){
    return(
        <div className='technologiesContainer'>
            <h2 className='center'>Technologies that I know</h2>
            <div className='technologiesListContainer'>
            {technologiesList.map((tech, index) => <Technology key={index} technology={tech}/>)}
            </div>
        </div>
    );
}

export default Technologies;