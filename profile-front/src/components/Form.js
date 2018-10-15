import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackRoutes from './Routers'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { edad: '', estatura: '', peso: '' };
    this.service = new BackRoutes();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {edad, estatura, peso} = this.state;

this.service.addData(edad, estatura, peso)

  }

  handleChange = (event) => {
    const { edad, estatura, peso, value } = event.target;
    this.setState({ [edad]: value, [estatura]: value, [peso]: value });
  }

  render() {

    return (<div>
      <h3 className="text-white">Para conocerte un poco mejor, es necesario que nos facilites la siguiente información</h3>

      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label className="text-white">Edad:</label>
          <input type="text" name="edad" value={this.state.edad} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label className="text-white">Estatura(cm):</label>
          <input type="text" name="estatura" value={this.state.estatura} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label className="text-white">Peso(kg):</label>
          <input type="text" name="peso" value={this.state.peso} onChange={e => this.handleChange(e)} />
        </fieldset>

        <input type="submit" value="send" />
      </form>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>)
  }
}

export default Form;