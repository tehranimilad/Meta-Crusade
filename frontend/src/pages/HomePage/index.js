import Image from 'react-bootstrap/Image'
import metacrusade from './assets/Meta-Crusade.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import './HomePage.css'


const HomePage = () => {
    return(
        <div className="homePageDiv">
            <Nav>
            </Nav>
            <Button>Back</Button>
            <Image className="homeImage" src={metacrusade} ></Image>
            <h1 className="homeContent">Welcome to Meta Crusade</h1>
            <Link className="homeLink" to="/learnmore">Learn More</Link>
        </div>
    )
}

export default HomePage