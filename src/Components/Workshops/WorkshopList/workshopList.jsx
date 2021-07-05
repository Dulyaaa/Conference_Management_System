import React, { Component } from 'react';
import WorkshopService from '../../../Services/WorkshopService';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './workshopList.css';

export default class workshopList extends Component {
    constructor(props) {
      super(props);
     this.retrieveWorkshops = this.retrieveWorkshops.bind(this);
      //this.refreshList = this.refreshList.bind(this);
      //this.setActiveWorkshop = this.setActiveWorkshop.bind(this);

     this.state = {
        workshops: [],
        //currentWorkshop: null,
        //currentIndex: -1
      }
    }

    componentDidMount() {
        this.retrieveWorkshops();
      }

      retrieveWorkshops() {
        WorkshopService.getAll()
          .then(response => {
            this.setState({
              workshops: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

    /*  refreshList() {
        this.retrieveWorkshops();
        this.setState({
          currentWorkshop: null,
          currentIndex: -1
        });
      }
    
  setActiveWorkshop(workshop, index) {
        this.setState({
          currentWorkshop: workshop,
          currentIndex: index
        });
      }*/
      
  render() {
    const { workshops } = this.state;

    return (
      <div style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
     <h1>Workshop Details</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Workshop Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>MobileNo</th>
                    <th>Email</th>
                    <th>Proposal URI</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                        workshops.map((workshop) => (
                            <tr key={workshop.id}>
                              <td>{workshop.id}</td>
                                <td>{workshop.workshopTitle}</td>
                                <td>{workshop.date}</td>
                                <td>{workshop.time}</td>
                                <td>{workshop.mobileNo}</td>
                                <td>{workshop.email}</td>
                                <td>{workshop.fileLink}</td>
                                <td>{workshop.status}</td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
         </div>  
    );
                  }
}