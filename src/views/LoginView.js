import React, { Component } from 'react'
import {connect} from "react-redux"
import authOperations from '../redux/auth/authOperations';


class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
 this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
     this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login Page</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email{""}
            <input
              onChange={this.handleChange}
              name="email"
              value={email}
              type="email"
              placeholder="email"
            />
          </label>
          <label>
            Password{""}
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
     
            />
          </label>
          <button type="submit"> Sign up </button>
        </form>
      </div>
    );
  }
}

export default connect(null,{onLogin: authOperations.logIn})(LoginView)