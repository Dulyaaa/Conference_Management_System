import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import logo from '../../Assets/title.jpg';

export default class PageTitle extends Component {

    render() {
        return (
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src={logo} alt="Card image" style={{ height: 170 }} />
                    <Card.ImgOverlay>
                        <Card.Text style={{ fontSize: 50, paddingTop: 30, textAlign: 'center', fontWeight: "bolder" }}>{this.props.title}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        );
    }
}
