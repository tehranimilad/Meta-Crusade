import Button from 'react-bootstrap/esm/Button';
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './LearnMore.css'
import Card from 'react-bootstrap/Card'

const LearnMore = () => {
    return(
        <div className="mainDiv">
            <Nav>
            </Nav>
            <Button className="backBtn" href="/home">Back</Button>
            <div className="learnMoreDiv">
                <h1>Here is more information about us</h1>
                <ul className="infoUl"> Team Members:
            </ul>
            <ul> Games we're creating
            </ul>
            </div>
        </div>
    )
}

export default LearnMore