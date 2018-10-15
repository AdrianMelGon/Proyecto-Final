import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './Auth/AuthService';
import axios from 'axios';
import Program from './Program';


class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: props.poster,
      loggedInUser: null,
    };
    this.service = new AuthService();
  }


  componentWillReceiveProps(nextProps) {
    // console.log("this.props.userInSession::::::::::::::::::::")
    // console.log(this.props.userInSession)
    
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  componentWillMount() {
    this.getPosterData();
  }


  handleLogout = (e) => {
    this.props.logout()
  }

  getPosterData() {

    let url = `http://localhost:4000/allProjects`;
    axios.get(url)
      .then(res => {
        this.setState({ poster: res.data });
        // console.log(res.data);
      })
      .catch(e => console.log("error pidiendo poster"))

  }



render() {
  // console.log(this.state.poster)
  // console.log(this.state.loggedInUser)

   let { poster } = this.state;
   if (this.state.loggedInUser) {
    return (
      <div className="poster-cont">
        {poster.map((e, i) => <div className="poster"><h2><Link to={`/${e._id}`}>{e.name}</Link></h2></div>) }
      </div>
    )
  } else if(this.state.loggedInUser == null) {
    return (
      <div  className="poster-cont">
        {this.state.poster ? this.state.poster.map((e, i) => <div className="poster"><h2><Link to={`/signup`}>{e.name}</Link></h2></div>) : ""}
      </div>
    )
  } 
}
}

export default Poster;





// render() {
//     console.log(this.state.poster)
//     console.log(this.state.loggedInUser)
//     let { poster } = this.state;

//     if (this.state.loggedInUser) {
//       return (
//         <div className="poster-cont">
//           <div class="row"> {poster.map((e, i) =>
//           <Link to={`/${e._id}`}>
//             <div class="col s12 m6">
//               <div class="card blue-grey darken-1">
//                 <div class="card-content white-text">
//                   <span class="card-title">{e.name}</span>
//                   <p>I am a very simple card. I am good at containing small bits of information.
//           I am convenient because I require little markup to use effectively.</p>
//                 </div>
//                 <div class="card-action">
//                   <a href="#">This is a link</a>
//                   <a href="#">This is a link</a>
//                 </div>
//               </div>
//             </div>
//             </Link>)}
//           </div>
//         </div>
//       )
//     } else if (this.state.loggedInUser == null) {
//       return (
//         <div className="poster-cont">    
//         <div class="row"> {poster.map((e, i) =>
//         <Link to={`/signup`}>
//           <div class="col s12 m6">
//             <div class="card blue-grey darken-1">
//               <div class="card-content white-text">
//                 <span class="card-title">{e.name}</span>
//                 <p>I am a very simple card. I am good at containing small bits of information.
//         I am convenient because I require little markup to use effectively.</p>
//               </div>
//               <div class="card-action">
//                 <a href="#">This is a link</a>
//                 <a href="#">This is a link</a>
//               </div>
//             </div>
//           </div>
//           </Link>)}
//         </div>
//       </div>
//       )
//     }
//   }
// }
