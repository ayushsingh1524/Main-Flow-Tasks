import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3100/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to log in');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
  
      // Clear the form fields after submission
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error logging in:', error);
    }
  };
  return (
    <>
      
        <div className="flex container box">
          <div className="grid grid-two-cols">
            <div className="login-form ">
              <h1>Welcome</h1>
              <p>
                Don't have an account yet? <Link to="/signup">SignUp</Link>
              </p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email"
                  placeholder="Enter your E-mail address"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
                <div className="button-containers">
                  <button type="submit" className="submit-button">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="login-image ">
              <img
                src="/person.png"
                alt="This is person image la"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

    </>
  );
}

export default Login;
