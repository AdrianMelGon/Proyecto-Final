import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './Auth/AuthService';
import Poster from "./Poster";
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
  
    super(props);
    this.state = {
      loggedInUser: props.userInSession,
    }
  }
  

  // componentWillMount() {
  //   this.getProgramData();
  // }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params)
    this.setState({ ...this.state, loggedInUser: nextProps["user"] })
  }


  
  render() {

    let { program } = this.state;
    return (
      <div>
      <h1>Profile</h1>
       <Poster userInSession={this.state.loggedInUser}/>
      </div>
    )
  }
}

export default Profile;



