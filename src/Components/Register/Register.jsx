import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import{Form , Card}  from 'react-bootstrap'
import RegisterUserService from '../../Services/RegisterUserService';

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
          firstname : null,
          lastname : null,
          email : null,
          username : null,
          roleId : null,
          password : null,
          cnfpwd : null,
          role : "USER",
          RoleType: null,

          error : null,
     
        }
    }

    handleChange = this.handleChange.bind(this);
    handleRadioGender = this.handleRadioGender.bind(this);
    shoot = this.shoot.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    
    shoot(event){
      //alert(this.state.gender);
        
         if(this.state.password != this.state.cnfpwd){
          alert("Two paaswords are dismatched");
          this.state.password = null;
        
          return;
        }

        if(this.state.username == null){
          alert("Username cannot be empty !");
          return;
        }
        if(this.state.email == null){
          alert("Email cannot be empty !");
          return;
        }

        
    }
    handleRadioGender(event){
        this.state.roleId = event.target.value
    }
  

    handleChange(event) {  
          this.setState({
            [event.target.name]: event.target.value,


          });
    }
    componentDidMount() {
      window.sessionStorage.getItem("RoleType");
      this.state.RoleType = sessionStorage.RoleType
  }

    handleSubmit(event){
      if(this.state.password == null){
        event.preventDefault();
      }

    else{
      event.preventDefault();

      let user = {
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        username : this.state.username,
        email:this.state.email,
        password:this.state.password,
        roleId: this.state.roleId,
        role : this.state.role
      };
      console.log('User =>' + JSON.stringify(user));

      RegisterUserService.addCustomer(user).then(res => {
        if(sessionStorage.RoleType == "Attendee"){
        this.props.history.push("/payment")
        }else{
          this.props.history.push("/")
        }
    });

    }
      
  }

    render() {
        return (
          <div className="registeruser">         
          <body className="userprofile" >
         <div style={{paddingLeft : '6cm', alignContent:'center', width:'25cm'}}>
           <div  style={{ alignContent:'center', width:'25cm'}}>
             <Card  variant ="dark" style={{alignContent:'center', width:'28cm'}}>
                   <div className='section-title text-center'>
                        <h3>Sign UP</h3>
                    </div>              
                    <div className = "card-body" style={{ alignContent:'center', width:'25cm'}}>
          <form method="POST" onSubmit= {this.handleSubmit} style={{ alignContent:'center', width:'25cm'}} >
          <div className="form-group row" style={{ alignContent:'center', width:'25cm'}}>
               <label  className="col-sm-2 col-form-label" 
              //  htmlFor={name}
               >Name</label>
               <div className="col-sm-5">
                 <input type="text" id = "fisrtname" name="firstname" value={this.state.firstname} className="form-control" onChange={this.handleChange} placeholder="Jone" required></input>
                 
               </div>
               <div className="col-sm-5">
               <input type="text"  name="lastname" value={this.state.lastname} className="form-control" onChange={this.handleChange} placeholder ="Dohe" required />
               </div>
           </div>
           <div className="form-group row">
               <label className="col-sm-2 col-form-label"  >Email<span class="required"><font size="5">*</font></span></label>
               <div className="col-sm-10">
                 <input type="email" id = "email"  size="25" name="email" value={this.state.email}  className="form-control" onChange={this.handleChange} placeholder="name@example.com" required/>
               </div>
               
           </div>
           <div className="form-group row">
               <label className="col-sm-2 col-form-label">User Name</label>
               <div className="col-sm-10">
               <input type="text" value={this.state.username} name="username"className="form-control"  onChange={this.handleChange}  placeholder="name@example.com" required />
               </div>
             
           </div>
           <div class="form-group row">
               <label  class="col-sm-2 col-form-label">Password <span class="required"><font size="5">*</font></span></label>
               <div class="col-sm-10">
               <input type="password" value={this.state.password} placeholder ="   Password must contain at least 6 characters " id="cnfpwd" className="form-control" onChange={this.handleChange} name="password" required />
               </div>
           </div>
           <div class="form-group row">
               <label  class="col-sm-2 col-form-label">Confirm Password <span class="required"><font size="5">*</font></span></label>
               <div class="col-sm-10">
               <input type="password" value={this.state.cnfpwd} placeholder ="   Confirm Password"id="cnfpwd" className="form-control" onChange={this.handleChange} name="cnfpwd"  required />
          
               </div>
           </div>
           <div class="form-group row">
               <label for="inputPassword" class="col-sm-3 col-form-label">Register AS</label>
               <div onChange={this.handleRadioGender}>
                 <div class="form-check form-check-inline col-sm-3 ">
                   <input type="radio" name="roleId" value="Attendee"></input>Attendee
                 </div>
                 <div class="form-check form-check-inline col-sm-3 ">
                   <input type="radio" name="roleId" value="Workshop Conductor"></input>Workshop Conductor
                 </div>
                 <div class="form-check form-check-inline col-sm-3 ">
                   <input type="radio" name="roleId" value="Researcher"></input>Researcher
                 </div>
               </div>
           </div>
               <input type="checkbox" id="checkbox" name = "check" checked /><font size="3">Agree to the terms and conditions</font>
             <br/><br/>
             <center>
               
               <Button type="submit"  variant="dark" onClick={this.shoot} className="btn btn-danger btn-block" ><font size="4">Sign Up</font></Button>
             </center>
            
          </form>
          </div>
          </Card>
          </div>
          </div>
          </body>
          
        </div>
        )
    }
}
