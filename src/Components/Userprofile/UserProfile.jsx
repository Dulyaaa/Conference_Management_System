import React, { Component } from 'react'
import './Userprofile.css';
import { Link } from 'react-router-dom';
import { Form , Button } from 'react-bootstrap';
import RegisterUserService from '../../Services/RegisterUserService';

const initialState = {
  fname: '',
  lname: '',
 email : '',
 username : '',
 role : ''
}

export default class Userprofile extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
          UserId : '',   
          user :[],
        }

        this.handleEvent = this.handleEvent.bind(this)
        this.ChangeFirstName = this.ChangeFirstName.bind(this);
        this.shoot = this.shoot.bind(this);
        this.onChange = this.onChange.bind(this);
        this.deleteprof = this.deleteprof.bind(this);
        this.state = initialState;
    }
   

    shoot(event){
      event.preventDefault();

      let user = {
          fname : this.state.fname,
          lname : this.state.lname,
          email : this.state.email,
          username: this.state.username,
          role : this.state.role
      }
      let id = window.sessionStorage.getItem("UserId");
      RegisterUserService.updateuser(id , user).then(res => {
        console.log("ID" +this.state.UserId , user);
      });
    }
    deleteprof(event){
      event.preventDefault();
      let id = window.sessionStorage.getItem("UserId");
      RegisterUserService.deleteUser(id).then(res =>{
        this.props.history.push('/');
      })
    }


    componentDidMount() {
      window.sessionStorage.getItem("UserId");
      this.state.UserId = sessionStorage.UserId;
      RegisterUserService.getUserByIdOptional(this.state.UserId).then(res => {
        this.state.isFound = true;
        let user = res.data;
        console.log(user);
        this.setState({
          fname : user.firstname,
          lname : user.lastname,
          email : user.email,
          username: user.username,
          role : user.roleId

        })
      });
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
  }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    ChangeFirstName = (event) => {
      this.setState({fname : event.target.value});
    }
    render() {
        return (
    
    <div class="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
              <div className="mt-3" >
                 <div >
                    <h4>Maheshi Purnima</h4>
                <p className="text-secondary mb-1">Full Stack Developer</p>
                 </div>
                <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                <Link to='/logout'><button className="btn btn-primary">Log Out</button></Link>
              
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <Form className="card-body">
          <Form.Group className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">First Name</h6>
              </div>
              <input className="col-sm-9 text-secondary"
               type="text"
               id="fname"
               name="fname"
               value={this.state.fname}
               onChange={this.ChangeFirstName}
              >
              </input>
            </Form.Group>
            <hr />
            <Form.Group className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Last Name</h6>
              </div>
              <input className="col-sm-9 text-secondary"
               type="text"
               id="lname"
               name="lname"
               value={this.state.lname}
               onChange={this.onChange}
              >
              </input>
            </Form.Group>
            <hr />
            <Form.Group className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <input className="col-sm-9 text-secondary"
               type="text"
               id="email"
               name="email"
               value={this.state.email}
               onChange={this.onChange}
              >
              </input>
            </Form.Group>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">User name</h6>
              </div>
              <input className="col-sm-9 text-secondary"
               type="text"
               id="username"
               name="username"
               value={this.state.username}
               onChange={this.onChange}
              >
              </input>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Role</h6>
              </div>
              <input className="col-sm-9 text-secondary"
               type="text"
               id="role"
               name="role"
               value={this.state.role}
               onChange={this.onChange}
               readOnly
              >
              </input>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
              <Form.Group>
              <Button type="submit" onClick={this.shoot}  style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Edit</Button> 
                <Button type="back"  onClick={this.deleteprof}  style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Delete</Button>
              </Form.Group>             
               </div>
            </div>
          </Form>
        </div>
      </div>
    </div>

        )
    }
}
