import React, { Component } from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image, Alert , InputGroup} from 'react-bootstrap';
import add from 'url:~/src/Assets/add.png';
import './Payment.css';
import PaymentService from '../../Services/PaymentService';

const initialState = {
    username : '',
    nameOnTheCard : ''  ,
    cardNumber : '',
    cvc : '',
    exDate : '',
    RoleType: null
}

export default class Payment extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;

       
    }

    componentDidMount() {
        window.sessionStorage.getItem("RoleType");
        this.state.RoleType = sessionStorage.RoleType
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    // Prototype methods, Bind in Constructor (ES2015)
    onSubmit(e) {
        e.preventDefault();
        let payment = {
            username : window.sessionStorage.getItem("UserId"),
            nameOnTheCard: this.state.fname,
            cardNumber: this.state.cnumber,
            cvc: this.state.cvc,
            exDate: this.state.exdate
        };
        console.log("P:AYMENT IS SUCCESSFUL ", payment);
        PaymentService.addpayment(payment).then(res =>{
            this.props.history.push("/")

        })

    }


    render() {
    if(sessionStorage.RoleType == "Attendee"){
        return (
            <div style={{marginTop: "-4cm"}}>
                <div id='createConference' style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                    <div className='section-title text-center'>
                        <h3>Payment</h3>
                    </div>
                    <Row className="landing">
                        <Col >
                            <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%" }}>
                                <Form.Group >
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confTopic"
                                        name="fname"
                                        placeholder="Full Name"
                                        value={this.state.fname}
                                        onChange={this.onChange} />
                                        
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="cnumber"
                                        name="cnumber"
                                        placeholder="Card Number"
                                        value={this.state.cnumber}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>CVC Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="cvc"
                                        name="cvc"
                                        placeholder="CVC"
                                        value={this.state.cvc}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Card Expiration</Form.Label>
                                    <Form.Control
                                        type="date"
                                        id="exdate"
                                        name="exdate"
                                        placeholder="MM/YY"
                                        value={this.state.exdate}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Submit</Button> {''}
                                    <Link to='/'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col >
                            <Image src={add} thumbnail style={{ border: "none" }} />
                        </Col>
                    </Row>
                </div >
            </div >
        )
    }
       
    }
}
