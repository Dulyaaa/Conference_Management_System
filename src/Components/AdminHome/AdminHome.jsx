import React, { Component } from 'react'
// import ViewConference from '../Editor/ViewConference/ViewConference'
import ViewConference from './ConferenceAdmin/ConferenceAdmin'
// import ConferenceDetails from '../Conference/ConferenceDetails/ConferenceDetails'
import { Card , Row , Col , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import research from 'url:~/src/Assets/research.png';
import staff from 'url:~/src/Assets/staff.jpg';
import conf from 'url:~/src/Assets/conf.png';

import workshopList from '../Workshops/WorkshopList/workshopList'
import './AdminHome.css';


export default class Adminhome extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div   style={{marginTop: "-4cm"}}>
                <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Admin Dashboard</h3>
                    </div>


                    <Row className="landing">
                    <Col style= {{paddingLeft : '7cm'}}>
                        <Card style={{ width: '18rem' ,  }} className="text-center">
                                <Card.Img variant="top" src={research} />
                                <br/> <br/> <br/> <br/>
                                <Card.Body>
                                    <Card.Title>Research Papers</Card.Title>
                                    <Link to='/add-research'><Button variant="primary">View</Button></Link>
                                </Card.Body>
                                </Card>
                    </Col>  
                    <Col style= {{paddingLeft : '1cm'}}>
                        <Card style={{ width: '18rem' ,  }} className="text-center">
                                <Card.Img variant="top" src={conf} />
                              
                                <Card.Body>
                                    <Card.Title>Conference Details</Card.Title>
                                    <Link to='/conference-admin'><Button variant="primary">View</Button></Link>
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
