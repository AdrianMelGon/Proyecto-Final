import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      program: props.program,
      // loading: props.project ? false : true
    };
  }

  getProgramData =(props)=> {
    let {_id} = this.state.project;
    let url = `http://localhost:3010/paths/${_id}`;
    // console.log(url)
    axios.get(url)
      .then(res => {
        this.setState({ program: res.data });
        console.log("Hola")
        console.log(this.program);
      })
      .catch(e => console.log("error pidiendo program"))
  }
  
  // const { params } = props.match;
  // const foundProgram = getProgramData(params.id, 10);
render () {
  return (
    <div>
       <div>
       <h2>{this.state.name}</h2>
        <p>{this.state.description}</p>
         <button>Solicitar</button>
      </div>
    </div>
  )

}
}

export default Program;























// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import AuthService from './AuthService';
// import axios from 'axios';


// class Program extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       program: props.program,
//       loggedInUser: null,
//       // loading: props.project ? false : true
//     };
//     this.service = new AuthService();
//   }

//   componentWillMount() {
//     if (!this.state.program) {
//       this.getProgramData();
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     // console.log(nextProps)
//     this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
//   }

//   handleLogout = (e) => {
//     this.props.logout()
//   }
//   getProgramData() {
//     let {_id} = this.state.project;
//     let url = `http://localhost:3010/paths/${_id}`;
//     // console.log(url)
//     axios.get(url)
//       .then(res => {
//         this.setState({ program: res.data, loggedInUser: false});
//         console.log(this.program);
//       })
//       .catch(e => console.log("error pidiendo program"))

//   }
  
//   render() {

//     let { program } = this.state;
//     return (
//       <div>
//         <h2>{program.data.name}</h2>
//         <p>{program.data.description}</p>
//         <button>Solicitar</button>
//       </div>
//     )
//   }
// }

// export default Program;





//-------------------------------------------



// import React from 'react';
// import { myProjects } from './Projects';
// import { Link } from 'react-router-dom';

// const projectDetails = (props) => {
//   console.log(props)

//   const getProject = (id) => {
//     const theProject = oneProject => {
//       return oneProject.id === id;
//     }
//     return myProjects.find(theProject)
//   };
  
//   const { params } = props.match;
//   const foundProject = getProject(params.id, 10);
   
//   return (
//     <div>
//       <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
//       <h3>Used technologies: { foundProject.technologies }</h3>
//       <p>{ foundProject.description }</p>
//       <Link to='/projects'>Back</Link>
//     </div>
//   )
// }

// export default projectDetails;