import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Image, Alert,Card } from 'react-bootstrap';
import add from 'url:~/src/Assets/add.png';
import {CommonGet, CommonPost} from "../Common/config";

// export default class Contact extends Component {

//     render() {
//         return (

//             <div className='container'>
//                 <div id='createConference'>
//                     <div className='section-title text-center'>
//                         <h3>Contact Us</h3>
//                     </div>

            
//   <Row className="landing">
//      <Col >
                        
//         <Card>
//           <Card.Header as="h5">General Contacts</Card.Header>
//             <Card.Body>
//                     <Card.Text>
//                         <Row> ICAF</Row>
//                         <Row> ABC PLC,</Row>
//                         <Row> Colombo 01,</Row>
//                         <Row> Sri Lanka.</Row>
//                         <Row> Telephone: +94 111 222 2222</Row>
//                         <Row> Email: ABC@gmail.com</Row>
            
//                     </Card.Text>
                   
//             </Card.Body>
//         </Card>

// <br/>
//         <Row>
//         <Card>
//           <Card.Header as="h5">Customer Support(24X7)</Card.Header>
//             <Card.Body>
//                     <Card.Text>
//                         <Row> Telephone: 1234</Row>
//                         <Row> Email: ABC@gmail.com</Row>
            
//                     </Card.Text>
                   
//             </Card.Body>
//         </Card>
//         </Row>
//     </Col>


//     <Col >
//                             <Image src={add} thumbnail style={{ border: "none" }} />
//     </Col>
// </Row>
export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {

          email: "",
          message: "",
    
        }}

    componentDidMount() {
    }

    
    handleOnChange = (event) => {
      console.log("ABC",event.target.value);
      const state = this.state
      state[event.target.name] = event.target.value;
      this.setState(state);
    };

    handleOnClick = (event) => {
      event.preventDefault();

      let formData =
      {
          "email":this.state.email ,
          "message":this.state.message 
      }

      CommonPost('feedback/saveFeedback', formData)
      .then(res => res.json())
      .then(json => {
          this.setState({
              isLoaded: true,

          })
      });
      //toast.success("Successfully Added !");
    }


    render() {
        return (
            <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Contact Us</h3>
                    </div>
                    <Row className="landing">
                        <Col >
                       <div> <h3>
                       Leave A Comment
                       </h3></div>
                            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
                                <Form.Group >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleOnChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        value={this.state.message}
                                        onChange={this.handleOnChange} />
                                </Form.Group>

                                <br />
                                <Form.Group>
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }} onClick={this.handleOnClick}>Submit </Button> {''}
                                   </Form.Group>
                            </Form>
                             
                        </Col>
                       

     <Col >
                        
        <Card border="primary" style={{ width: '35rem' }}>
          <Card.Header as="h5">General Contacts</Card.Header>
            <Card.Body>
                    <Card.Text>
                        <Row> ICAF</Row>
                        <Row> ABC PLC,</Row>
                        <Row> Colombo 01,</Row>
                        <Row> Sri Lanka.</Row>
                        <Row> Telephone: +94 111 222 2222</Row>
                        <Row> Email: ABC@gmail.com</Row>
            
                    </Card.Text>
                   
            </Card.Body>
        </Card>

<br/>
        
          <Card border="primary" style={{ width: '35rem' }}>
                <Card.Header as="h5">Customer Support(24X7)</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    <Row> Telephone: 1234</Row>
                    <Row> Email: ABC@gmail.com</Row>
                    </Card.Text>
                </Card.Body>
         </Card>
      
    </Col>
                        
                    </Row>


</div>
</div>


        );
    }
}