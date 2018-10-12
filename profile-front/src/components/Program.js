import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Program extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.match.params.id)
    
    this.state = {
      loggedInUser: props.user,
      program: props.program,
      params: props.match.match.params.id
    }
  }
  

  componentWillMount() {
    this.getProgramData();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params)
    this.setState({ ...this.state, params: nextProps.match.params, loggedInUser: nextProps["userInSession"] })
  }


  getProgramData() {
    console.log(this.state)
    let url = `http://localhost:3010/${this.state.params}`;
    axios.get(url)
    .then(res => {
      console.log(res.data)
      this.setState({ program: res.data, params: res.data.id});

    })
    .catch(e => console.log("error pidiendo programa"))
    
  }
  
  
  render() {

    let { program } = this.state;
    console.log(this.state)
    if (this.state.loggedInUser) {
      return (
        <div>
          <h1>HOla</h1>
        </div>
      )
    } else if(this.state.loggedInUser == null) {
      return (
        <h1>Ciao</h1>
       
      )
    }

  }
}











































// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';



// class Program extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       program: props.program,
//       // loading: props.project ? false : true
//     };
//   }


//   componentWillMount() {
//     this.getProgramData();

//   }

//   getProgramData =(props)=> {
//     let {_id} = this.state.project;
//     let url = `http://localhost:3010/paths/${_id}`;
//     // console.log(url)
//     axios.get(url)
//     .then(res => {
//       this.setState({ program: res.data });
//       console.log("Hola")
//       console.log(this.program);
//     })
//     .catch(e => console.log("error pidiendo program"))
//   }

//   let param = props.match.params.id
//   // const { params } = props.match;
//   // const foundProgram = getProgramData(params.id, 10);
// render () {
//   return (
//     <div>
//        <div>
//        <h2>{this.state.name}</h2>
//         <p>{this.state.description}</p>
//          <button>Solicitar</button>
//       </div>
//     </div>
//   )

// }
// }


// export default Program;




