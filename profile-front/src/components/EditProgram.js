import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackRoutes from './Routers'


export default class EditProgram extends Component {
  constructor(props) {
    console.log(props.match.params.id)
    super(props);
    this.state = {
      name: "",
      description: "",
      duration: "",
      popularity: 0,
      picture: "",
      fee: 0,
      id: props.match.params.id
    }
    this.service = new BackRoutes;
  }

  componentWillMount() {
    

  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, description, duration, popularity, fee, id } = this.state;

//NO TE OLVIDES DE PICTURE
    this.service.postEdit(name, description, duration, popularity, fee, id)
      .then(edited => console.log(edited))
      .catch(err => console.log(err))

  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // handleChangeFile = (event) => {
  //     const value = event.target.files[0];
  //     this.setState({file: value});
  //   }

  handleDeleteProgram = () => {
    console.log(this.state.id)
    // event.preventDefault();
    this.service.deleteProgram(this.state.id)
    .then(deleted => console.log(deleted))
    .catch(err => console.log(err))
  }



  render() {

    return (<div>
      <h3 className="text-white">Edita el programa</h3>

      <form onSubmit={this.handleFormSubmit}>

        <fieldset>
          <label className="text-white">Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label className="text-white">Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label className="text-white">Duration:</label>
          <input type="number" name="duration" value={this.state.duration} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label className="text-white">Popularity:</label>
          <input type="number" name="popularity" value={this.state.popularity} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label className="text-white">Fee</label>
          <input type="number" name="fee" value={this.state.fee} onChange={e => this.handleChange(e)} />
        </fieldset>

     {/* / <Link to="/solicitudenviada"> */}
      <button type="submit" value="Enviar" >Enviar</button>
      {/* </Link> */}
      </form>


      <button onClick={this.handleDeleteProgram.bind(this)}>Delete</button>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>)
  }
}