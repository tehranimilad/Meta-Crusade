import Image from 'react-bootstrap/Image'
import metacrusade from './assets/Meta-Crusade.png';
import React from 'react';

const HomePage = () => {
    return(
        <div>
            <Image className="homeImage" src={metacrusade} ></Image>
        </div>
    )
}

export default HomePage