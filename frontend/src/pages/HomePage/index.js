import Image from 'react-bootstrap/Image'
import metacrusade from './assets/Meta-Crusade.png';
import React from 'react';

const HomePage = () => {
    return(
        <div>
            <Image className="homeImage" src={metacrusade} ></Image>
            <h1>Welcome to Meta Crusade</h1>
            <h2>About Us</h2>
        </div>
    )
}

export default HomePage