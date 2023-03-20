import Image from 'react-bootstrap/Image'
import metacrusade from './assets/Meta-Crusade.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import './HomePage.css'


const HomePage = () => {
    return(
        <div className="homePageDiv">
            <Nav>
            </Nav>
            <Image className="homeImage" src={metacrusade} ></Image>
            <h1 className="homeContent">Welcome to meta</h1>
            <Link className="homeContent" to="/learnmore">Learn More</Link>
        </div>
    )
}

export default HomePage