import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './Auth/AuthService';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    console.log("recibe en navbar")
    console.log(this.state.loggedInUser)
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {

    if (this.state.loggedInUser) {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <h2 className="text-white">DIETFLIX</h2>
          <a className="text-white" onClick={this.handleLogout}>Logout</a>
          <h2 className="text-white">Welcome, {this.state.loggedInUser.username}</h2>
          <Link className="text-white" to='/profile'>My profile</Link>
        </nav>
      )
    } else {
      return (
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <h2 className="text-white">DIETFLIX</h2>
            <div>
              <Link className="text-white" to='/signup'>Signup</Link>
              <Link className="text-white" to='/auth/login'>Login</Link>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default Navbar;