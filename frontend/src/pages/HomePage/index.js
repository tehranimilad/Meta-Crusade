import Image from 'react-bootstrap/Image'
import metacrusade from './assets/Meta-Crusade.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link, useNavigate } from "react-router-dom";


const HomePage = () => {
    return(
        <div>
            <Nav>
            </Nav>
            <Image className="homeImage" src={metacrusade} ></Image>
            <h1>Welcome to meta</h1>
            <Link to="/learnmore">Learn More About Us</Link>
            
        </div>
    )
}

export default HomePage