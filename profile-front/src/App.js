import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/Auth/AuthService';
import Navbar from './components/Navbar';
import { Switch, Route, Router } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Loggedin from './components/Auth/Loggedin';
import Poster from "./components/Poster";
import Program from "./components/Program";
import Form from "./components/Form";
import Profile from "./components/Profile";
import Solicitudenviada from "./components/Solicitudenviada";
import ClientData from "./components/ShowClientData";
import Response from "./components/Response"
import EditProgram from "./components/EditProgram"

import axios from 'axios'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
    console.log(this.state.loggedInUser.isNutricionist)

  }

  logout = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
      })
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }


  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      if (this.state.loggedInUser.isNutricionist === true) {
        return (
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <div>
              <ClientData />
              <Switch>
                <Route path="/myprofile" render={() => <Profile userInSession={this.state.loggedInUser} />} />
                <Route path="/response" render={() => <Response />} />
                <Route path="/editProgram/:id" component={EditProgram} />
              </Switch>
            </div>
          </div>
        )
      }
      else {
        return (
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <div>
              <Switch>
                <Route path="/myprofile" render={() => <Profile userInSession={this.state.loggedInUser} />} />
                <Route path='/solicitar' render={() => <Form />} />
                <Route path='/solicitudenviada' render={() => <Solicitudenviada />} />
                <Route path="/:id" render={(id) => <Program user={this.state.loggedInUser} match={id} />} />
              </Switch>
            </div>
          </div>
        )
      }
    }
    else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
              <Route exact path='/auth/login' render={() => <Login getUser={this.getTheUser} />} />
            </Switch>
          </header>
          <div>
            <Poster />

          </div>
        </div>
      );
    }
  }
}

export default App;

