import React, { Component } from 'react';
import './Gallery.css';
import conference from '../../../Assets/conference.PNG';
import present from '../../../Assets/present.PNG';
import sliit from '../../../Assets/sliit.PNG';
import view from '../../../Assets/view.PNG';
import presenter from '../../../Assets/presenter.PNG';
import library from '../../../Assets/lib.PNG';

class Gallery extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='portfolio' className='text-center'>
                <div style= {{paddingLeft : "3cm" , paddingRight : "3cm"}}>
                    <div className='section-title'>
                        <h2>Gallery</h2>
                        <p>Check out gallery from recent events</p>
                    </div>
                    <div className='portfolio-items'>
                        <div className='row'>

                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Sri Lanka Institute of Information Technology</h4>
                                        </div>
                                        <img
                                            src={sliit}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 330, width: 400 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Conference Day</h4>
                                        </div>
                                        <img
                                            src={view}
                                            className='img-responsive'
                                            alt='Project Title'
                                            // style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Conference Presenter</h4>
                                        </div>
                                        <img
                                            src={presenter}
                                            className='img-responsive'
                                            alt='Project Title'
                                            // style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Speaker</h4>
                                        </div>
                                        <img
                                            src={present}
                                            className='img-responsive'
                                            alt='Project Title'
                                            // style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Conference Day</h4>
                                        </div>
                                        <img
                                            src={conference}
                                            className='img-responsive'
                                            alt='Project Title'
                                            style={{ height: 300 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-4'>
                                <div className='portfolio-item'>
                                    <div className='hover-bg'>
                                        {' '}
                                        <div className='hover-text'>
                                            <h4>Researcher</h4>
                                        </div>
                                        <img
                                            src={library}
                                            className='img-responsive'
                                            alt='Project Title'
                                        // style={{ height: 200, width: 200 }}
                                        />{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;

