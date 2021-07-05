import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../Assets/new.png';

export default class Navbarnew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserRole : null, 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        window.sessionStorage.getItem("UserRole");
        this.state.UserRole = sessionStorage.UserRole;
        
       
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        if(sessionStorage.UserRole == "ADMIN"){
        return (
            
            <Navbar bg="light" variant="dark-gray">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand  href="/">
                <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top" />
                </Navbar.Brand>
                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px"}}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/adminhome">Admin Home </Nav.Link>
                <Nav.Link href="/contactUs">Contact us</Nav.Link>
                </Nav>

                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px" , paddingLeft: "22cm" }}>
                <Navbar.Brand href="/userprofile">
                <img 
                src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                alt="Admin" className="rounded-circle" 
                width={50} />
                </Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        }


         else if(sessionStorage.UserRole == "USER"){
        return (
            
            <Navbar bg="light" variant="dark-gray">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand  href="/">
                <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top" />
                </Navbar.Brand>
                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px" }}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/keynotes">Keynotes</Nav.Link>
                <Nav.Link href="/conference">Conference</Nav.Link>
                <Nav.Link href="/contactUs">Contact us</Nav.Link>
                </Nav>

                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px" , paddingLeft: "22cm"}}>
                <Navbar.Brand href="/userprofile">
                <img 
                src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                alt="Admin" className="rounded-circle" 
                width={50} />
                </Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
         }else if(sessionStorage.UserRole == "EDITOR"){
             return(
                <Navbar bg="light" variant="dark-gray">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand  href="/">
                <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top" />
                </Navbar.Brand>
                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px" }}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/keynotes">Keynotes</Nav.Link>
                <Nav.Link href="#pricing">Editor Dashborad</Nav.Link>
                <Nav.Link href="/contactUs">Contact us</Nav.Link>
                </Nav>
    
                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px", paddingLeft: "22cm" }}>
                <Navbar.Brand href="/userprofile">
                <img 
                src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                alt="Admin" className="rounded-circle" 
                width={50} />
                </Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
             )
           
         }else if(sessionStorage.UserRole == "REVIEWER"){
            return(
               <Navbar bg="light" variant="dark-gray">
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Navbar.Brand  href="/">
               <img
               src={logo}
               width="70"
               height="70"
               className="d-inline-block align-top" />
               </Navbar.Brand>
               <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px"}}>
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/keynotes">Keynotes</Nav.Link>
               <Nav.Link href="/review">Reiewer Dashborad</Nav.Link>
               <Nav.Link href="/contactUs">Contact us</Nav.Link>
               </Nav>
   
               <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px", paddingLeft: "22cm" }}>
               <Navbar.Brand href="/userprofile">
               <img 
               src="https://bootdey.com/img/Content/avatar/avatar7.png" 
               alt="Admin" className="rounded-circle" 
               width={50} />
               </Navbar.Brand>
               </Nav>
               </Navbar.Collapse>
           </Navbar>
            )
          
        }
         else{
             return(
                <Navbar bg="light" variant="dark-gray">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand  href="/">
                <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top" />
                </Navbar.Brand>
                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px" }}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/keynotes">Keynotes</Nav.Link>
                <Nav.Link href="/conference">Conference</Nav.Link>
                <Nav.Link href="/past-proceedings">Past Proceedings   </Nav.Link>

                <Nav.Link href="/contactUs">Contact us    </Nav.Link>

                </Nav>
    
                <Nav id = "navbar" className="me-auto" style= {{fontSize:"18px" , paddingLeft: "22cm"}}>
                <Navbar.Brand href="/userprofile">
                <img 
                src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                alt="Admin" className="rounded-circle" 
                width={50} />
                </Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
             )
         }
    }
}
