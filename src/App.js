import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbarnew from './Components/NavbarNew/NavbarNew';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="body">

        <Navbarnew></Navbarnew>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}
