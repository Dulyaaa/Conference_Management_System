import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, Card, Button, CardColumns } from 'react-bootstrap';
import './Conference.css';
import PageTitle from '../PageTitle/PageTitle';
import NotFound from '../NotFound/NotFound';
import { getApprovedConferenceFn } from '../../BizLogic';

const initialState = {
    approvedConferences: []
}
export default class Conference extends Component {
    constructor(props) {
        super(props);
        this.getAllApprovedConference = this.getAllApprovedConference.bind(this);
        this.viewMoreDetails = this.viewMoreDetails.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        this.getAllApprovedConference();
    }

    /**
    * @description This method retrieve all approved Conference
    * @memberof ViewConference
    */
    getAllApprovedConference = () => {
        const callbackFn = (result) => {
            const { data, error } = result;
            console.log("data", data);
            if (data) {
                this.setState({ approvedConferences: data });
            }
            if (error) {
                console.log(error);
            }
        }
        {/** Calling function to retrieve data */ }
        getApprovedConferenceFn(callbackFn);
    }

    /**
    * @description This method retrieve all approved Conference
    * @memberof ViewConference
    */
    viewMoreDetails = (id) => {
        this.props.history.push("/conference-details/" + id);
    }

    render() {
        return (
            <div>
                <PageTitle title="CONFERENCE" />
                <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                    <div id='conference'>
                        <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                            <h5>We are thrilled to continue our Learning Guild Certificate Programs at DevLearn. These Guild-certified two-day experiences prioritize paths to competency on core topics. </h5>
                            {/* <div className='section-title text-center'>
                                <h2>Conference Details</h2>
                            </div> */}
                            <br /><br />
                            <CardColumns>
                                {
                                    this.state.approvedConferences.map(
                                        conference =>
                                            <Card style={{ backgroundColor: "ButtonFace", left: "50%" }}>
                                                <Card.Body>
                                                    <Card.Title>{conference.confTopic}</Card.Title>
                                                    <h6>{conference.confDate}</h6>
                                                    <Card.Text>{conference.confDescription}</Card.Text>
                                                    <div className="text-center">
                                                        <Button variant="info" onClick={() => this.viewMoreDetails(conference.confId)}>More Details</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                    )
                                }
                            </CardColumns>
                            {/* <NotFound /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}