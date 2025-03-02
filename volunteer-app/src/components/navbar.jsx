import React, {useState} from 'react';
import BearLogo from "../assets/bruinbear.jpeg";

function navbar() {
    return (
    <nav className="navbar">
        <div className = "leftSide">
            <img src={BearLogo}></img>
        </div>
        <div className = "rightSide">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Opportunities</a></li>
                <li><a href="">Saved</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default navbar