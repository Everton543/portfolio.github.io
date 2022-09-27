import React from "react";
import { leftOrRight } from "../service/model";
import './technology.css';

function Technology({technology, position}){
        let className = "technologyContainer " + leftOrRight(position);
    return(
        <div className={className}>
            <p> {technology.name} </p>
        </div>
    );
}

export default Technology;