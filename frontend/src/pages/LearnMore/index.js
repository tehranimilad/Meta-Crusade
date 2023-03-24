import Image from 'react-bootstrap/Image'
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './LearnMore.css'
import Card from 'react-bootstrap/Card'

const LearnMore = () => {
    return(
        <div className="learnMoreDiv">
            <Nav>
            </Nav>
            <div>
            <Card className="learnMoreDiv">
                <h1>Here is more information about us:</h1>
                <ul> Team Members
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <ul> Games we're creating
                <li>Idea 1</li>
                <li>Idea 2</li>
                <li>Idea 3</li>
                <li>Idea 4</li>
            </ul>
            </Card>
            </div>
        </div>
    )
}

export default LearnMore