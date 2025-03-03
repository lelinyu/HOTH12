import React, {} from 'react';
import BearLogo from "../assets/bruinbear.jpeg";
import {Link} from "react-router-dom";
import "../styles/navbar.css";


function navbar() {
    return (
    <div className="navbar">
        <div className = "leftSide">
            <h1> Volunteen </h1>
            <img src={BearLogo}></img>
        </div>
        <div className = "rightSide">
            <Link to="/home"> Home </Link> 

            <Link to="/opportunities"> Opportunities </Link>

            <Link to="/saved"> Saved </Link>

        </div>
    </div>
    )
}

export default navbar