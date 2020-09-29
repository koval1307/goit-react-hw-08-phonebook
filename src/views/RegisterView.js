import React, { Component } from 'react'
import { connect } from "react-redux";
import authOperations from "../redux/auth/authOperations"


class RegisterView extends Component {
    state = {
        name: " ",
        email: " ",
        password: "",
}
    handleChange = ({ target: { name, value } }) => {
    this.setState({[name]:value})
}
    handleSubmit = e => {
        e.preventDefault();

        this.props.onRegister({ ...this.state })
    };

    render() {
        const { name, email, password } = this.state;

        return (
          <div>
            <h1>Register Page</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name{" "}
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Email{" "}
                <input
                  value={email}
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Password{" "}
                <input
                  name="password"
             value={password}
                  type="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit"> Sign up </button>
            </form>
          </div>
        );
    }

}

export default connect(null, {onRegister: authOperations.register})(RegisterView)