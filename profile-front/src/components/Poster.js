import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Poster extends Component {

  render() {
    return (
      <div>
        <h2 width="100" height="100"><Link to='/signup'>{this.props.title}</Link></h2>
      </div>
    )
  }
}



export default Poster;