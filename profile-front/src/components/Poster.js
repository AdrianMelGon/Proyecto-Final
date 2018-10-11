import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';
import axios from 'axios';


class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      poster: props.poster,
      loggedInUser: null,
      // loading: props.project ? false : true
     };
    this.service = new AuthService();
  }

  componentWillMount(){
    if(!this.state.poster){
        this.getPosterData();
    }
}

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  getPosterData() {
    let url = `http://localhost:3010/allProjects`;
    axios.get(url)
    .then(res => {
      this.setState({poster: res.data});
      console.log(res.data);
    })
    .catch(e => console.log("error pidiendo poster"))

  }
  render() {

    let {poster} = this.state;


    if (this.state.loggedInUser) {
      console.log(poster)
     return( 
       <div>
        {poster.map((e, i) => <h2 width="100" height="100"><Link to={`/${e._id}`}>{e.name}</Link></h2>)}
       </div>
      )
    } else {
      console.log(poster)
      return (
          <div>
           {poster.map((e, i) => <h2 width="100" height="100"><Link to={`/${e._id}`}>{e.name}</Link></h2>)}
          </div>
        // <h2 width="100" height="100"><Link to='/signup'>{this.props.title}</Link></h2>
      )
    }
  }
}
// {posterDat.map((e, i) => <Poster userInSession={this.state.loggedInUser} key={i} title={e.title} _id={e._id}></Poster>)}



export default Poster;
























// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Poster extends Component {

//   render() {
//     return (
//       <div>
//         <h2 width="100" height="100"><Link to='/signup'>{this.props.title}</Link></h2>
//       </div>
//     )
//   }
// }

// export default Poster;

// to={`/projects/${eachProject.id}`}

