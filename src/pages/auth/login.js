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
        console.log(res);
        if (res.error) {
          this.setState({ error: res.error });
        } else {
          localStorage.setItem("byarent-token", res.token);
          localStorage.setItem("byarent-user", res.user);
          this.props.history.push("/");
        }
      })
      .catch(error => console.log(error));
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.trim() });
  };

  render() {
    return this.props.isAuthenticated() ? (
      <div>
        <h1>Is Authed</h1>
      </div>
    ) : (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <div className="boxed-view__headerText">
            <h1>Welcome back!</h1>
            <h2>Login</h2>
          </div>
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
            <button type="submit" className="boxed-view__button">
              Log In
            </button>
          </form>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}
