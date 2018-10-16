import React, { Component } from 'react';




class Response extends Component {
  render() {
    return(
      <div>
        <h3 className="text-white">Respóndele a tu cliente</h3>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label className="text-white">Respuesta</label>
            <input type="text" name="respuesta" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    )

  }
}

export default Response;
