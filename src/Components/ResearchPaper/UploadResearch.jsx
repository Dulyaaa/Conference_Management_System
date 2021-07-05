import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Row, Col, Button, Form, Image, Alert } from 'react-bootstrap';
import add from '../../Assets/add.png';
import {CommonGet, CommonPost} from "../Common/config";
//import {toast, ToastContainer} from "react-toastify";
//import "react-toastify/dist/ReactToastify.css"
//import './CreateConference.css';
//import { createConferenceFn, getAllImportantDateFn } from '../../../../BizLogic'; //TODO: get papers & workshops



export default class UploadResearch extends Component {

    constructor(props) {
        super(props);
        this.state = {

          name: "",
          email: "",
          contact_no: "",
          title: "",
          pdf: "",
    
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
          "name": this.state.name,
          "email":this.state.email ,
          "contact_no":this.state.contact_no ,
          "title":this.state.title ,
          "pdf":this.state.pdf,
          "status":"pending"
      }
      CommonPost('researchers/saveReseachppr', formData)
      .then(res => res.json())
      .then(json => {
          this.setState({
              isLoaded: true,

          })
        //   this.props.history.push("/")
      });
      //toast.success("Successfully Added !");
    }


    render() {
        return (
            <div style= {{paddingLeft : "3cm" , paddingRight : "3cm" , marginTop :"-3cm"}}>
                <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Add new Research Paper</h3>
                    </div>
                    <Row className="landing">
                        <Col >
                            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
                                <Form.Group >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        // htmlFor={name}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name" required
                                        value={this.state.name}
                                        onChange={this.handleOnChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        // htmlFor={name}
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email" required
                                        value={this.state.email}
                                        onChange={this.handleOnChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="contact_no"
                                        name="contact_no"
                                        placeholder="Contact number" required
                                        value={this.state.contact_no}
                                        onChange={this.handleOnChange}
                                    />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Research Topic" required
                                        value={this.state.title}
                                        onChange={this.handleOnChange}
                                    />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Upload Your pdf Link</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="pdf"
                                        name="pdf"
                                        placeholder="pdf" required
                                        value={this.state.pdf}
                                        onChange={this.handleOnChange}
                                    />
                                </Form.Group>

                                <br />
                                <Form.Group>
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }} onClick={this.handleOnClick}>Submit </Button> {''}
                                   </Form.Group>
                            </Form>
                        </Col>
                        <Col >
                            <Image src={add} thumbnail style={{ border: "none" }} />
                        </Col>
                    </Row>

                 
                </div >
            </div >
        );
    }
}
