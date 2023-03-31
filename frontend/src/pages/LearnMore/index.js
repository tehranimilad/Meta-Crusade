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
            <Button>Back</Button>
            <Card className="learnMoreDiv">
                <h1>Here is more information about us</h1>
                <ul className="infoUl"> Team Members:
                <li className="infoUl">Meezy</li>
                <li className="infoUl">OxR0amPal</li>
                <li className="infoUl">3</li>
                <li className="infoUl">4</li>
            </ul>
            <ul> Games we're creating
                <li>Idea 1</li>
                <li>Idea 2</li>
                <li>Idea 3</li>
                <li>Idea 4</li>
            </ul>
            </Card>
        </div>
    )
}

export default LearnMore