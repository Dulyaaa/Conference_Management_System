import React, { Component } from 'react';
import './PaperTopicsStyles.css';
import Error from '../../NotFound/NotFound';

export default class MainSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const topics = [
            {
                topic: "Big Data, Machine Learning, and Cloud Computing",
                icon: ""
            },
            {
                topic: "Biomedical Engineering and Instrumentationn",
                icon: ""
            },
            {
                topic: "Image, Vision, and Signal Processing",
                icon: ""
            },
            {
                topic: "Robotics and Intelligent Systems",
                icon: ""
            },
            {
                topic: "Software Engineering",
                icon: ""
            },
            {
                topic: "Technology Management",
                icon: ""
            },
            {
                topic: "Engineering Mathematics & Statistics",
                icon: ""
            },
            {
                topic: "Electronics, Control, and Instrumentation",
                icon: ""
            },
            {
                topic: "Big Data, Machine Learning,and Cloud Computing",
                icon: ""
            },
        ]
        return (
            <div id='topics'>
                <div style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                    <div className='section-title text-center'>
                        <h2>Submission Topics</h2>
                        <p style={{ color: "white" }}>Papers can be submitted to the conference under the following regular tracks</p>
                    </div>
                    <div className='row'>
                        {
                            topics ? topics.map((item, index) => (
                                <div className='col-md-4'>
                                    <div className='topic'>
                                        <div className='topic-content'>
                                            <h3>{item.topic}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                            ) :
                                <div>
                                    <Error />
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}