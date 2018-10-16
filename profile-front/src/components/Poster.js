import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './Auth/AuthService';
import axios from 'axios';


class Poster extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      poster: null,
      loggedInUser: props.userInSession,
    };
    this.service = new AuthService();
  }


  componentWillReceiveProps(nextProps) {
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
      })
      .catch(e => console.log("error pidiendo poster"))

  }

  render() {

    console.log(this.state.loggedInUser)
    console.log(this.state.poster)
if(this.state.poster){
  if (this.state.loggedInUser) {
    return (
      <div className="poster-cont">
      <h1>HOLI</h1>
        {this.state.poster.map((e, i) => <div className="poster"><h2><Link to={`/${e._id}`}>{e.name}</Link></h2></div>)}

      </div>
    )
  } else if (this.state.loggedInUser == null) {
    return (
      <div className="poster-cont">
        {this.state.poster ? this.state.poster.map((e, i) => <div className="poster"><h2><Link to={`/signup`}>{e.name}</Link></h2></div>) : ""}
      </div>
    )
  }

} else {
  return(
  <h1>ERROR</h1>
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
