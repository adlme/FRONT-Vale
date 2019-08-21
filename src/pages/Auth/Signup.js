import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {Redirect} from 'react-router-dom';


import withAuth from "../../components/withAuth";

class Signup extends Component {

  state = {
    email: '',
    password: '',
    message: '',
    redirect: false,
  };


  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    this.props.signup({ email, password })
      .then(data => {
        console.log(data)
        data.message ?
        this.setState({
          message: data.message,
        }) :
        this.setState({
            email: '',
            password: '',
            redirect: true,
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { email, password, redirect } = this.state
    return (
      <div className = "login-signup-wrapper">
        <form className = "form-login-signup" onSubmit={this.handleFormSubmit}>
          <label htmlFor="email" className="inp">
              <input type="email" name="email" id="email" placeholder="&nbsp;"  value={email} onChange={this.handleChange} required />
              <span className="label">Email</span>
          </label>
        {this.state.message ? 
        <p id='error'>{this.state.message}</p>
        : null}

          <label htmlFor="password" className="inp">
            <input type="password" name="password" id="password" placeholder="&nbsp;" value={password} onChange={this.handleChange} required />
            <span className="label">Password</span>
          </label>

          <input className = "btn btn-signup final" type="submit" value='Signup' />
        </form>
        <p>Already have an account?</p>
        <Link className='login-signup-link' to={'/login'}>Login!</Link>
        {redirect ? <Redirect to="/plans"/> : null}
      </div>
    )
  }
}

export default withAuth(Signup);