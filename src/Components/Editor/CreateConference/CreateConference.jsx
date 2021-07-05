import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Row, Col, Button, Form, Image } from 'react-bootstrap';
import add from '../../../Assets/add_new.png';
import './CreateConference.css';
import { createConferenceFn } from '../../../BizLogic';
import WorkshopService from '../../../Services/WorkshopService';

import axios from 'axios';

const initialState = {
    confTopic: '',
    confDate: '',
    confDescription: '',
    approveStatus: "Pending",
    researchPapers: [],
    researchPapersOptions: [],
    selectedResearchPapers: [],
    workshops: [],
    workshopOptions: [],
    selectedWorkshops: []
}

export default class CreateConference extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getAllResearchPapers = this.getAllResearchPapers.bind(this);
        this.getAllWorkshops = this.getAllWorkshops.bind(this);
        this.onResearchPapersSelect = this.onResearchPapersSelect.bind(this);
        this.onWorkshopsSelect = this.onWorkshopsSelect.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        this.getAllResearchPapers();
        this.getAllWorkshops();
    }

    /**
     * @description Retrieve all Research Papers to select
     * @memberof CreateConference
     */
    getAllResearchPapers = () => {
        axios.get('https://icaf-cms-backend.herokuapp.com/researchers/showResearch')
            .then(response => {
                this.setState({ researchPapers: response.data }, () => {
                    let data = [];
                    this.state.researchPapers.map((item, index) => {
                        let researchPaper = {
                            value: item.id,
                            label: item.title,
                            name: item.name,
                            status: item.status,
                            link: item.pdf
                        }
                        data.push(researchPaper)
                        // if (researchPaper.status == "Approved") {
                        //     data.push(researchPaper)
                        // }
                    });
                    this.setState({ researchPapersOptions: data });
                })
            })
    }

    /**
    * @description This method retrieve all workshops
    * @memberof CreateConference
    */
    getAllWorkshops = () => {
        axios.get('https://icaf-cms-backend.herokuapp.com/workshop/')
            .then(response => {
                this.setState({ workshops: response.data }, () => {
                    let data = [];
                    this.state.workshops.map((item, index) => {
                        let workshop = {
                            value: item._id,
                            label: item.workshopTitle,
                            time: item.time,
                            status: item.status,
                            link: item.fileLink
                        }
                        if (workshop.status == "Approved") {
                            data.push(workshop)
                        }
                    });
                    this.setState({ workshopOptions: data });
                });
            })
    }

    /**
    * @description Change state to input values
    * @memberof CreateConference
    */
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    /**
    * @description Add selected Research papers
    * @memberof CreateConference
    */
    onResearchPapersSelect = (e) => {
        this.setState({ selectedResearchPapers: e ? e.map(item => item) : [] });
    }

    /**
    * @description Add selected Workshops
    * @memberof CreateConference
    */
    onWorkshopsSelect = (e) => {
        this.setState({ selectedWorkshops: e ? e.map(item => item) : [] });
    }

    /**
     * @description Add new conference details
     * @memberof CreateConference
     */
    onSubmit = (e) => {
        e.preventDefault();
        if (this.handleFormValidation()) {
            let conference = {
                confTopic: this.state.confTopic,
                confDate: this.state.confDate,
                confDescription: this.state.confDescription,
                researchPapers: this.state.selectedResearchPapers,
                workshops: this.state.selectedWorkshops,
                approveStatus: this.state.approveStatus
            };
            console.log("CONFERENCE REQUEST TO CREATE: ", conference);
            createConferenceFn(conference);
        }
    }

    /**
    * @description Validate fields
    * @memberof CreateConference
    */
    handleFormValidation() {

        const { confTopic, confDate, confDescription, selectedResearchPapers, selectedWorkshops } = this.state;

        if (!confTopic) {
            alert('Conference Topic could not be empty.');
        } else if (!confDate) {
            alert('Conference Date could not be empty.');
        } else if (!confDescription) {
            alert('Conference Description could not be empty.');
        } else if (!selectedResearchPapers) {
            alert('Select one or more Research Papers.');
        } else if (!selectedWorkshops) {
            alert('Select one or more Workshops.');
        } else {
            return true
        }
    }

    render() {
        console.log("research papers", this.state.researchPapersOptions);
        console.log("workshops", this.state.workshopOptions);
        return (
            <div className=''>
                <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Create Conference</h3>
                    </div>
                    <Row className="landing">
                        <Col >
                            <Image src={add} thumbnail style={{ border: "none", width: 550, height: 550, marginLeft: 150, marginTop: 0 }} />
                        </Col>
                        <Col >
                            <Form onSubmit={this.onSubmit} style={{ width: "80%" }}>
                                <Form.Group >
                                    <Form.Label>Conference Topic</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confTopic"
                                        name="confTopic"
                                        placeholder="Conference Topic"
                                        value={this.state.confTopic}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Conference Date</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confDate"
                                        name="confDate"
                                        placeholder="Conference Date"
                                        value={this.state.confDate}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Conference Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confDescription"
                                        name="confDescription"
                                        placeholder="Conference Description"
                                        value={this.state.confDescription}
                                        onChange={this.onChange}
                                        as="textarea"
                                        rows={3}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    Select Research Papers<br />
                                    <Select
                                        options={this.state.researchPapersOptions}
                                        onChange={this.onResearchPapersSelect}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </Form.Group>
                                <Form.Group>
                                    Select Workshops<br />
                                    <Select
                                        options={this.state.workshopOptions}
                                        onChange={this.onWorkshopsSelect}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Submit</Button> {''}
                                    <Link to='/conference-editor'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div >
            </div >
        );
    }
}
