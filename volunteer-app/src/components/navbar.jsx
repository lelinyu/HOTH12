import React, {useState} from 'react';
import BearLogo from "../assets/bruinbear.jpeg";
import {Link} from "react-router-dom";
import "../styles/navbar.css";

function navbar() {
    return (
    <nav className="navbar">
        <div className = "leftSide">
            <img src={BearLogo}></img>
        </div>
        <div className = "rightSide">
            <Link to="/"> Home </Link>
            <Link to="/opportunities"> Opportunities </Link>
            <Link to="/saved"> Saved </Link>
        </div>
    </nav>
    )
}

export default navbar