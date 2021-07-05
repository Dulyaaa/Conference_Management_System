import React, { Component } from 'react';
import { Button,Form,Col,Card,Navbar,Nav,NavDropdown,FormControl,Badge,CardDeck,Table,Container,Row,Image} from 'react-bootstrap';
//import { BrowserRouter as Router, Switch, Route, Link,updateform, Table1, Redirect } from 'react-router-dom';
import {CommonGet, CommonPost} from "../Common/config";

export default class ReviewTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rawList:[]
        }}
    
        componentDidMount() {
          CommonGet('researchers/showResearch', '')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  isLoaded: true,
                  rawList: json
              })
          });
        }
       
      handleClick(){
        this.props.history.push('/table')
      }
    
      renderRow(list) {
    
        // CommonGet('showResearch', '')
        //   .then(res => res.json())
        //   .then(json => {
        //       this.setState({
        //           isLoaded: true,
        //           rawList: json
        //       })
        //   });
    
        let tableContent = (list === undefined || list === null || list.length === 0) ? null : (
    
            list.map((item) => {
    
                return (
                    <tr>
                       <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.contact_no}</td>
                          <td>{item.title}</td>
                          <td>{item.pdf}</td>
                          <td> <Button variant="success">Accept</Button>{' '} <br/><br/> <Button variant="danger">Decline</Button>{' '}</td>
                    </tr>
                );
    
    
            }));
        return (
    
            <tbody>
            {tableContent}
            </tbody>
        );
    }

    
  render() {


    let rowList = this.renderRow(this.state.rawList);

    return (

    <div >
    <div class="row justify-content-center align-items-center">
    <div id='createConference'>
                    <div className='section-title text-center'>
                        <h3>Research Paper Uploads</h3>
                    </div>

         <Card border="dark" style={{ width: '80rem' }}>
          <Table striped bordered hover size="sm" striped bordered hover>
            <thead>
              <tr>
                
                <th>Author Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Title of the Research Paper</th>
                <th>PDF</th>
                <th>Status</th>
              </tr>
            </thead>
            {rowList}

           
          </Table>
          </Card>

          </div >
            </div >
            </div>
      );
    }
}
