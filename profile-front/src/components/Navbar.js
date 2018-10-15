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



          {/* <ul>
            <li><a onClick={this.handleLogout}>Logout</a></li>
          </ul> */}

          <h2 className="text-white">Welcome, {this.state.loggedInUser.username}</h2>
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



  {/*           <ul>
              <li><Link className="text-white" to='/signup'>Signup</Link></li>
              <li><Link className="text-white" to='/auth/login'>Login</Link></li>
            </ul> */}



          </nav>
        </div>
      )
    }
  }
}

export default Navbar;