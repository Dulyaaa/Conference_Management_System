import React, { Component } from 'react';
import MainSection from './MainSection/MainSection';
import AboutSection from './AboutSection/AboutSection';
import ImportantDatesSection from './ImportantDatesSection/ImportantDates';
import KeyNoteSpeakerSection from './KeyNoteSpeakerSection/KeyNoteSpeaker';
import PaperTopicsSection from './PaperTopicsSection/PaperTopics';
import GallerySection from './GallerySection/Gallery';
import MapSection from './MapSection/Map';
// import CountDown from './CountDownSection/CountDown';
import './HomeStyles.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <MainSection />
                <AboutSection />
                <ImportantDatesSection />
                <KeyNoteSpeakerSection />
                <PaperTopicsSection />
                {/* <CountDown /> */}
                <GallerySection />
                <MapSection />
            </div>
        )
    }
}