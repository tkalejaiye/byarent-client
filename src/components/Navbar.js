import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import "../styles/components/_navbar.scss";

export default props => {
  return (
    <div className="navbar">
      <nav className="navbar-left">
        <NavLink className="logo" to="/">
          BYA<span style={{ color: "#DC281E" }}>RENT</span>
        </NavLink>
        <NavLink to="#">Buy</NavLink>
        <NavLink to="#">Rent</NavLink>
        <NavLink to="#">Contact</NavLink>
      </nav>

      {props.isAuthenticated() ? (
        <nav className="navbar-right">
          <NavLink to="#">{localStorage.getItem("byarent-user")}</NavLink>
          <NavLink
            to="#"
            onClick={() => localStorage.removeItem("byarent-token")}
          >
            Log Out
          </NavLink>
        </nav>
      ) : (
        <nav className="navbar-right">
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav>
      )}
    </div>
  );
};
