import React, { Component } from 'react';
import AuthService from './AuthService'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', isNutricionist: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const isNutricionist = this.state.isNutricionist;
    console.log(isNutricionist)

    this.service.signup(username, password, isNutricionist)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            isNutricionist: ""
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    console.log(name)
    this.setState({[name]: value});
  }
      
  handleBoolean = (event) => {  
    const {value} = event.target;
    console.log(value)
    this.setState({isNutricionist: value});
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

         <div>
            <label className="text-white">¿Eres nutricionista?</label>
            <br></br>
            <div>
            <input type="checkbox" value={false} onChange={ e => {console.log(e.target); return this.handleBoolean(e)}} />

            <label for={false}>No</label>
            </div>
        
              
            <input type="checkbox" name="Si" value={true} onChange={ e => this.handleBoolean(e)} />
            <label htmlFor="Si">Sí</label>
          </div>
          
          <input type="submit" value="Sign up" />
        </form>

      </div>
    )
  }
}

export default Signup;