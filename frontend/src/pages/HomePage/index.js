import Image from 'react-bootstrap/Image'
import metacrusade from './assets/Meta-Crusade.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav'

const HomePage = () => {
    return(
        <div>
            <Nav>
            </Nav>
            <Image className="homeImage" src={metacrusade} ></Image>
            <h1>Welcome to meta</h1>
        </div>
    )
}

export default HomePage