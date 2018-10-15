import React, { Component } from 'react';
import AuthService from './AuthService'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', zona: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const zona = this.state.zona;

    this.service.signup(username, password, zona)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            zona: ""
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3 className="text-white">Bienvenido a Dietflix:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label className="text-white">Nombre:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label className="text-white">Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label className="text-white">Zona:</label>
            <input type="text" name="zona" value={this.state.zona} onChange={ e => this.handleChange(e)} />
          </fieldset>
          
          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;