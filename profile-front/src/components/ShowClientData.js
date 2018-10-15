import React, { Component } from 'react';
import BackRoutes from './Routers'

class ClientData extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state ={
      clientData: null
    };
    this.service = new BackRoutes();
  }

  componenetWillMount() {
    this.getClientData()
  }

  getClientData () {
    this.service.getData()
    .then(res => {
      console.log(res)
      this.setState({clientData: res.data})
    })
    .catch(e => console.log("error pidiendo clientData"))



  }

  render() {
    let {clientData} = this.state;
    return (
      <div className="poster-cont">
    <h1>HELLO</h1>
        {/* {clientData.map((e, i) => <div className="clientData"><h2>{e.edad}</h2></div>) } */}
      </div>
    )
  }
}

export default ClientData;
