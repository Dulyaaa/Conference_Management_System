import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import sliit from '../../../Assets/sliit.PNG';
import './Map.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '700px',
    height: '500px'
};

const center = {
    lat: 6.914890510962993,
    lng: 79.97295522615666
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

export default class MapSection extends Component {
    render() {
        return (
            <div id='map'>
                {/* <div className='container'> */}
                <div className='section-title text-center'>
                    <h2>Conference Venue</h2>
                </div>
                <div className='map-text'>
                    <h3>Sri Lanka Institute of Information Technology, Malabe</h3>
                    <h5>SLIIT, a leading technological university in
                        the region welcomes you to witness a truly unique experience!</h5>
                </div>
                <br />
                <Row>
                    <Col style={{ marginLeft: 80 }}>
                        <LoadScript
                            googleMapsApiKey="AIzaSyAspUe2Qs6uYpcT7JFkaMhALTSAEBucQqA">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}>
                                <Marker
                                    onLoad={onLoad}
                                    position={center}
                                    label={"Sri Lanka Institute of Information Technology"} />
                            </GoogleMap>
                        </LoadScript>
                    </Col>
                    <Col style={{ marginRight: 60, }}>
                        <Card className="bg-light text-dark">
                            <Card.Img src={sliit} alt="Card image" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}