import Image from 'react-bootstrap/Image'
import metacrusade from './assets/Meta-Crusade.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import './HomePage.css'


const HomePage = () => {
    return(


<main>
  <div class="button">
    <div class="text">Submit</div>
  </div>
  <div class="progress-bar"></div>
  <svg x="0px" y="0px"
	 viewBox="0 0 25 30" style="enable-background:new 0 0 25 30;">
    <path class="check" className="st0" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
  </svg>
</main>




        // <div className="homePageDiv">
        //     <Nav>
        //     </Nav>
        //     <Button>Back</Button>
        //     <Image className="homeImage" src={metacrusade} ></Image>
        //     <h1 className="homeContent">Welcome to Meta Crusade</h1>
        //     <Link className="homeLink" to="/learnmore">Learn More</Link>
        // </div>
    )
}

export default HomePage