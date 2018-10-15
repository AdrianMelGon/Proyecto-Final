import React, { Component } from 'react';
import BackRoutes from './Routers'

class ClientData extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      clientData: null
    };
    this.service = new BackRoutes();
  }

  componentWillMount() {
    this.getClientData()
  }

  getClientData() {
    this.service.getData()
      .then(res => {
        console.log(res)
        this.setState({ clientData: res })
        console.log(this.state)
      })
      .catch(e => console.log("error pidiendo clientData"))
  }

  render() {
    console.log(this.state.clientData)
    let { clientData } = this.state;
    if (clientData !== null) {
      return (
        <div className="poster-cont">
          {clientData.map((e, i) => <div className="clientData">
          <div>
          <h2>{e.userId}</h2>
          <p>{e.sexo}</p>
          <p>{e.edad}</p>
          <p>{e.peso}</p>
          <p>{e.estatura}</p>
          </div>


          </div>)}
        </div>
      )
    } else { 
      return (<h1>No llega</h1>)
    }
  }
}

export default ClientData;
