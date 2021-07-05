import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import research from 'url:~/src/Assets/research.png';
import staff from 'url:~/src/Assets/staff.jpg';
import { Row, Col, Button, Form, Image, Alert,Card } from 'react-bootstrap';

export default class ReviewerDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
 
    render() {
        return (
            <div style={{marginLeft: "8cm"}}>
                <div id='createConference'>
                    <div className='section-title text-center' style={{marginLeft: "-4cm"}}>
                        <h3>Reviewer Dashboard</h3>
                    </div>

                    <Row className="landing">
                    <Col >
                        <Card style={{ width: '18rem' }} className="text-center">
                                <Card.Img variant="top" src={research} />
                                <br/> <br/> <br/> <br/>
                                <Card.Body>
                                    <Card.Title>Research Papers</Card.Title>
                                    <Link to='/add-research'><Button variant="primary">View</Button></Link>
                                </Card.Body>
                                </Card>
                    </Col>  
                    <Col> <Card style={{ width: '18rem' }} className="text-center">
                                <Card.Img variant="top" src={staff} />
                                <Card.Body>
                                    <Card.Title>Workshops</Card.Title>
                                    
                                    <Link to='/workshops'><Button variant="primary">View</Button></Link>
                                </Card.Body>
                                </Card>
                    </Col>         
                    </Row>
                    </div>
                    </div>
        )
    }
}