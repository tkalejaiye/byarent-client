import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles
import "../../styles/components/_boxed-view.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "", token: "" };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch("http://localhost:8000/auth/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          this.setState({ error: res.error });
        } else {
          this.setState({ token: res.token });
        }
      })
      .catch(error => console.log(error));
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.trim() });
  };

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login Page</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.handleSubmit} className="boxed-view__form">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <input type="submit" />
          </form>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}
