import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import auth from '../../services/auth-service';
import withAuth from '../../components/withAuth';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state

    this.props.login({ email, password })
    .then( (user) => {
      console.log(user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className = "login-signup-wrapper">
        <form className = "form-login-signup" onSubmit={this.handleFormSubmit}>
          <label htmlFor="email" className="inp">
              <input type="text" name="email" id="email" placeholder="&nbsp;"  value={email} onChange={this.handleChange} required />
              <span className="label">Email</span>
          </label>
          <label htmlFor="password" className="inp">
            <input type="password" name="password" id="password" placeholder="&nbsp;" value={password} onChange={this.handleChange} required />
            <span className="label">Password</span>
          </label>

          <input className = "btn btn-signup final" type="submit" value='Login' />
        </form>
        <p>You don't have an account yet?</p>
        <Link to={'/signup'}>Signup!</Link>
      </div>
    )
  }
}

export default withAuth(Login);