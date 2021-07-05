import React, { Component } from 'react';
import './AboutSectionStyles.css';
import logo from '../../../Assets/new.png';

class MainSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="mainContainer">
                <div id='about'>
                    <div style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                        <div className='row'>
                            <div className='col-xs-12 col-md-6'>
                                <img src={logo} className='img-responsive' alt='' />{' '}
                            </div>
                            <div className='col-xs-12 col-md-6'>
                                <div className='about-text'>
                                    <h2>About Conference</h2>
                                    <p>ICAF is the most excited conference held around the world.
                                        This is the 1st time that the conference comes as a virtual
                                        online conference which leads to participate all of interested people.
                                        It will provide you with the answers to today’s toughest
                                        challenges, while also giving you the guidance to navigate the
                                        uncertain times ahead. You’ll find passionate, like-minded
                                        professionals who are leading their organizations’ use of
                                        learning technologies. The comprehensive program includes tools,
                                        technologies, ideas, strategies, and best practices to ensure your
                                        success. Whether you’re new to the field or a seasoned expert,
                                        DevLearn is the place to engage with your professional community
                                        and explore how technology can support learning and development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainSection;