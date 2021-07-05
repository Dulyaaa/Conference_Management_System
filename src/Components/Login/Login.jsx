import React, { Component } from 'react'
import './Login.css';
import Button from 'react-bootstrap/Button';
import RegisterUserService from '../../Services/RegisterUserService';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: [],
      userInvalid: [],

      email: null,
      password: null,
      error: null,
      isFound: false,
      isValid: false,

    };
  }
  handleChange = this.handleChange.bind(this);
  shoot = this.shoot.bind(this);

  componentDidMount() {

  } handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,

    });


  }
  shoot(event) {
    //console.log(this.state.email , this.state.password);
    /* UserService.getUserById(this.state.email).then(res => {
       let user = res.data;
       console.log('User => ' + JSON.stringify(user));
       this.props.history.push("/CustomerProfile")
   });*/
    event.preventDefault();

    RegisterUserService.getUserByIdOptional(this.state.email).then(res => {
      this.state.isFound = true;
      let user = res.data;
      console.log('User => ' + JSON.stringify(user));
      //this.props.history.push("/CustomerProfile");

      if (user == null) {
        this.state.isFound = false;
        alert("Invalid Credentials!!");
        return;
      }

      if (this.state.email == user.email && this.state.password == user.password) {
        this.state.isFound = true;
        window.sessionStorage.setItem("UserId", user.email);
        this.state.isValid = true;
        this.state.currentUser = user;



      } else {

        //window.sessionStorage.setItem("UserId", "NF");
        this.state.isValid = false;
      }


      if (this.state.isValid == true) {
        if (user.role == "USER") {
          window.sessionStorage.setItem("UserRole", "USER");
          this.state.isFound = true;
          this.props.history.push('/');
          window.sessionStorage.setItem("UserRole", "USER");

          if (user.roleId == "Attendee") {
            this.state.isFound = true;
            this.props.history.push('/');
            window.sessionStorage.setItem("RoleType", "Attendee");

          } else if (user.roleId == "Workshop Conductor") {
            this.state.isFound = true;
            this.props.history.push('/add-workshop');
            window.sessionStorage.setItem("RoleType","Workshop Conductor");
          }
          else if (user.roleId == "Researcher") {
            this.state.isFound = true;
            this.props.history.push('/research-paper');
            window.sessionStorage.setItem("RoleType", "Researcher");
          }
        }
        else if (user.role == "ADMIN") {
          window.sessionStorage.setItem("UserRole", "ADMIN");
          this.state.isFound = true;
          this.props.history.push('/');
          window.sessionStorage.setItem("UserRole", "ADMIN");
        }
        else if (user.role == "EDITOR") {
          window.sessionStorage.setItem("UserRole", "EDITOR");
          this.state.isFound = true;
          this.props.history.push('/conference-editor');
          window.sessionStorage.setItem("UserRole","EDITOR");
        }
        else if(user.role == "REVIEWER"){
          window.sessionStorage.setItem("UserRole","REVIEWER");
          this.state.isFound = true;
          this.props.history.push('/review');
          window.sessionStorage.setItem("UserRole","REVIEWER");
        }
      } else if (this.state.isValid == false && this.state.isFound == true) {
        this.state.isFound = true;
        alert("Password does not match with the given email!");
        this.props.history.push('/login');

      }


      //this.props.history.push("/CustomerProfile")
    });
  }




  render() {
    return (
      <div className="bg-img">
        <div className="content">
          <header>Login Form</header>
          <form action="#">
            <div className="field">
              <span className="fa fa-user" />
              <input type="email" required placeholder="Email or Phone" value={this.state.email} onChange={this.handleChange} className="form-control" name="email" />
            </div>
            <div className="field space">
              <span className="fa fa-lock" />
              <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" name="password" placeholder="Enter Password" required />
              <span className="show">SHOW</span>
            </div>
            <div className="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div>
              <Button type="submit" variant="primary btn-lg" onClick={this.shoot} className="btn btn-danger btn-block" ><font size="4">Login</font></Button>
            </div>
          </form>
          <div className="login">Or login with</div>
          <div className="links">
          </div>
          <div className="signup">Don't have account?
            <a href="#">Signup Now</a>
          </div>
        </div>
      </div>
    )
  }
}
