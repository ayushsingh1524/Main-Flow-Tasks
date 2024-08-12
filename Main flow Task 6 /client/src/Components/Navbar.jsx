import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h3>Brex</h3>
      </div>
      <div className="navbar-links">
        <ul>
          {location.pathname == "/signup" ? (
            <li>
              <Link to="/login">Have an account? Sign In</Link>
            </li>
          ) : (
            <li>
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
