import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackRoutes from './Routers'


class EditProgram extends Component {
getInitialProgram =()=> {
  return{
    name: "",
    description: "",
    duration: "",
    popularity: 0,
    picture: "",
    fee: 0
  }
}

componentDidMount = () => {
  let programId = this.props.programId;
}





}







// class EditProgram extends Component {
//   constructor(props) {
//     console.log(props)
//     super(props);
//     this.state = { sexo: '', edad: '', estatura: '', peso: ''};
//     this.service = new BackRoutes();
  // }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const {sexo, edad, estatura, peso} = this.state;

  //   this.service.addData(sexo, edad, estatura, peso)
  //     .then(anadido => console.log(anadido))
  //     .catch(e => console.log(e))
  // }

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // }

  render() {

    return (<div>
      <h3 className="text-white">Para conocerte un poco mejor, es necesario que nos facilites la siguiente información</h3>

      <form onSubmit={this.handleFormSubmit}>

<fieldset>
  <label className="text-white">Sexo:</label>
  <input type="text" name="sexo" value={this.state.sexo} onChange={e => this.handleChange(e)} />
</fieldset>

<fieldset>
  <label className="text-white">Edad:</label>
  <input type="number" name="edad" value={this.state.edad} onChange={e => this.handleChange(e)} />
</fieldset>

<fieldset>
  <label className="text-white">Estatura(cm):</label>
  <input type="number" name="estatura" value={this.state.estatura} onChange={e => this.handleChange(e)} />
</fieldset>

<fieldset>
  <label className="text-white">Peso(kg):</label>
  <input type="number" name="peso" value={this.state.peso} onChange={e => this.handleChange(e)} />
</fieldset>


<Link to="/solicitudenviada"><input type="submit" value="Enviar" /></Link>

</form>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>)
  }
}
}

export default EditProgram;