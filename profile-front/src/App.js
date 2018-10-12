import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Loggedin from './components/Loggedin';
import Poster from "./components/Poster";
import Program from "./components/Program";
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

/*    getPosterData = () => {
    let url = `http://localhost:3010/allProjects`;
    console.log(url)
    axios.get(url)
    .then(res => {
      console.log(res.data);
      this.setState({poster: res.data});
    })
    .catch(e => console.log("error pidiendo poster"))

  } */

  render() {
    this.fetchUser()


    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <div>
            <Poster userInSession={this.state.loggedInUser}/>
            {/* {posterDat.map((e, i) => <Poster userInSession={this.state.loggedInUser} key={i} title={e.title} _id={e._id}></Poster>)} */}
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
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
            </Switch>
          </header>
          <div>
          <Poster/>
            {/* {posterDat.map((e, i) => <Poster key={i} title={e.title}></Poster>)} */}
          </div>
        </div>
      );
    }
  }
}

export default App;

