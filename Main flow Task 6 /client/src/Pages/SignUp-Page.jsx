import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("form data submitted: ", formData);
    try {
      const response = await fetch("http://localhost:3100/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const data = await response.json();
      console.log("Sign Up successful:", data);
      alert("Sign Up successful!");
      // Clear the form fields after submission
      setFormData(initialFormData);
    } catch (error) {
      // Handle errors if the request fails
      console.error("Error signing in:", error);
    }
  };
  return (
    <>
      <div className="signup-container">
        <h1>Get Started</h1>
        <p>Welcome to Brex-let's create your account</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">E-mail Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="dob">Date of Birth(DOB)</label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="dob"
            required
            value={formData.dob}
            onChange={handleChange}
          />
          <div className="button-containers">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
