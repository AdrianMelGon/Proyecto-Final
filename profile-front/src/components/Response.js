import React, { Component } from 'react';
import axios from 'axios';


class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        cantidad: 0,
        calorias: 0,
        proteina: 0,
        carbohidratos: 0,
        fibra: 0,
        grasa: 0,
        alergenos: ""
    };
  }


  getNutriData() {
    let url = `http://localhost:3020/nutritionData/${this.state.nombre}`;
    let multiplicador = (this.state.cantidad/100)
    axios.get(url)
        .then(res => {
          this.setState({
            calorias: (this.calorias * multiplicador),
            proteina: (this.proteina * multiplicador),
            carbohidratos: (this.carbohidratos * multiplicador),
            fibra: (this.fibra * multiplicador),
            grasa: (this.grasa * multiplicador),
            alergenos: this.alergenos
          })
        })
        .catch(e => console.log("error pidiendo información nutricional"))
    }





  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
      <div>
        <h3 className="text-white">Respóndele a tu cliente</h3>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label className="text-white">Respuesta</label>
            <input type="text" name="respuesta" />
          </fieldset>
          <input type="submit" value="Enviar" />
        </form>
        <di>
          <h3>Consulta información sobre alimentos</h3>

          <form onSubmit={this.getNutriData}>
            <fieldset>
              <label className="text-white">Escriba un alimento</label>
              <input type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChange(e)} />
            </fieldset>
            <fieldset>
              <label className="text-white">Escriba una cantidad (en gramos)</label>
              <input type="number" name="cantidad" value={this.state.cantidad} onChange={e => this.handleChange(e)} />
            </fieldset>
            <input type="submit" value="Consultar" />
          </form>
        </di>
        <div>
          <h3>Output</h3>
          <h2>Información nutricional por {this.state.cantidad}g de {this.state.nombre}</h2>
          <p>this.state.calorias</p>

        </div>
      </div>
    )

  }
}

export default Response;
