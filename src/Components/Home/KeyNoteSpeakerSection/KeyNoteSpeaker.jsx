import React, { Component } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import avatar1 from '../../../Assets/avatar1.jpg';
import avatar5 from '../../../Assets/avatar5.jpg';
import avatar3 from '../../../Assets/avatar3.jpg';
import avatar4 from '../../../Assets/avatar4.jpg';
import { getAllKeynoteFn } from '../../../BizLogic';
import './KeyNoteSpeaker.css';


class KeyNoteSpeakers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keynotes: []
        }
    }

    /**
 * @description This method retrieve all Keynotes
 * @memberof ImportantDates
 */
    getAllImportantDates() {
        const callbackFn = (result) => {
            const { data, error } = result;
            if (data) {
                this.setState({ keynotes: data });
            }
            if (error) {
                console.log(error);
            }
        }
        {/** Calling function to retrieve data */ }
        getAllKeynoteFn(callbackFn);
    }

    render() {
        return (
            <div id='speakers'>
                <div style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                    <div className='section-title text-center'>
                        <h2>Key Note Speakers</h2>
                        <p>Introducing the names speaking at Technology Conference 2021:</p>
                    </div>
                    <CardDeck>
                        {/* {
                            this.state.keynotes.map(
                                keynote =>
                                    <Card>
                                        <Card.Img variant="top" style={{ height: 300 }} src={keynote.image} />
                                        <Card.Body>
                                            <Card.Title>{keynote.name}</Card.Title>
                                            <Card.Text>{keynote.title} </Card.Text>
                                            <Card.Text>{keynote.description} </Card.Text>
                                        </Card.Body>
                                    </Card>
                            )} */}
                        <Card>
                            <Card.Img variant="top" style={{ height: 300 }} src={avatar1} />
                            <Card.Body>
                                <Card.Title>Prof. John L. William</Card.Title>
                                <Card.Text>College of Engineering and Computing, Florida International University</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" style={{ height: 300 }} src={avatar5} />
                            <Card.Body>
                                <Card.Title>Prof. Nenlie Jenny</Card.Title>
                                <Card.Text>College of Engineering and Computing, Florida International University</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" style={{ height: 300 }} src={avatar3} />
                            <Card.Body>
                                <Card.Title>Prof. Keran Jaha</Card.Title>
                                <Card.Text>College of Engineering and Computing, Florida International University</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" style={{ height: 300 }} src={avatar4} />
                            <Card.Body>
                                <Card.Title>Prof. John L. Ben</Card.Title>
                                <Card.Text>College of Engineering and Computing, Florida International University</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default KeyNoteSpeakers;

