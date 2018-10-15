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
import ClientData from "./components/ShowClientData"
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
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <div>
            <Switch>
              <Route  path="/auth/login" exact strict render={() => <Poster userInSession={this.state.loggedInUser} />} />
              <Route  path="/:id" exact strict render={(id) => <Program user={this.state.loggedInUser} match={id} />} />
            </Switch> 
            <Form/>
          </div>
        </div>
      );
    } else {
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
            <Poster/>
            <ClientData/>
          </div>
        </div>
      );
    }
  }
}

export default App;

