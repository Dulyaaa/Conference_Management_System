import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, Card, Button, CardColumns, Row, Col, Image } from 'react-bootstrap';
import conf from '../../../Assets/conf.png';
import './ConferenceDetails.css';
import PageTitle from '../../PageTitle/PageTitle';
import { getConferenceByIdFn } from '../../../BizLogic';

const initialState = {
    conferenceDetails: {
        confId: '',
        confTopic: '',
        confDate: '',
        confDescription: '',
        researchPapers: [],
        workshops: []
    }
}
export default class ConferenceDetails extends Component {
    constructor(props) {
        super(props);
        this.getConference = this.getConference.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        this.getConference(this.props.match.params.id);
    }

    /**
    * @description This method retrieve Conference details
    * @memberof ConferenceDetails
    */
    getConference = (id) => {
        getConferenceByIdFn(id).then(response => {
            this.setState({
                conferenceDetails: response
            })
        })
            .catch(e => {
                console.log(e);
            })

        console.log("id of conference", this.state.conferenceDetails);
    }

    render() {
        console.log("conference details", this.state.conferenceDetails);
        return (
            <div>
                <PageTitle title="CONFERENCE DETAILS" />
                <div className="">
                    <div id='conference'>
                        <Row>
                            <Col>
                                <div style={{ marginLeft: 150, marginTop: 30 }}>
                                    <h4>{this.state.conferenceDetails.confTopic}</h4>
                                    <h5>{this.state.conferenceDetails.confDate}</h5>
                                    <p style={{ fontSize: 18, fontFamily: "revert" }}>{this.state.conferenceDetails.confDescription}</p>
                                    <div class="text-center">
                                        <Link to='/register'> <Button style={{ marginBottom: 0 }} variant="primary" >Register Now</Button></Link>
                                    </div>
                                    <h5></h5>
                                </div>
                            </Col>
                            <Col >
                                <Image src={conf} thumbnail style={{ border: "none", width: 500, height: 500, marginLeft: 70, marginTop: -80 }} />
                            </Col>
                        </Row>
                        <hr />
                        <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                            <div className='section-title text-center'>
                                <h3>Publications</h3>
                                <br />
                                <div class="row">
                                    {this.state.conferenceDetails.researchPapers.map((item) => (
                                        <div class="column">
                                            <div class="card">
                                                <h5>Paper Topic</h5>
                                                <p>{item.label}</p>
                                                <h5>Paper Topic</h5>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                            <hr />
                            <div className='section-title text-center'>
                                <h3>Workshops</h3>
                            </div>
                            <br />
                            <div class="row">
                                {this.state.conferenceDetails.workshops.map((item) => (
                                    <div class="column">
                                        <div class="card">
                                            <h5>Workshop Title</h5>
                                            <p>{item.label}</p>
                                            <h5>Time</h5>
                                            <p>{item.time}</p>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        );
    }
}
