import React, { Component } from 'react';
import './Keynotes.css';
import KeyNoteSpeakers from '../Home/KeyNoteSpeakerSection/KeyNoteSpeaker';
import PageTitle from '../PageTitle/PageTitle';

export default class Conference extends Component {

    render() {
        return (
            <div>
                <PageTitle title="KEY NOTE SPEAKERS" />
                <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                    <KeyNoteSpeakers />
                </div>
            </div>
        );
    }
}
