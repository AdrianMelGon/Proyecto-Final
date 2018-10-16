import React, { Component } from 'react';
import BackRoutes from './Routers'
import { Link } from 'react-router-dom';

class ClientData extends Component {
  constructor(props) {
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
        this.setState({ clientData: res })
      })
      .catch(e => console.log("error pidiendo clientData"))
  }

  render() {
    let { clientData } = this.state;
    if (clientData !== null) {
      return (
        <div className="poster-cont">
          {clientData.map((e, i) => <div className="clientData">
            <div>
              <h5>{e.userId}</h5>
              <p>{e.sexo}</p>
              <p>{e.edad}</p>
              <p>{e.peso}</p>
              <p>{e.estatura}</p>
              <button><Link to="/response">Responder</Link></button>
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
