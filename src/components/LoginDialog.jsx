// src/components/LoginDialog.jsx
import React, { useState } from "react"; // Import React and useState
import { loginUser } from "../API"; // Import the loginUser function from API
import "./LoginDialog.module.css"; // Import styles

const LoginDialog = ({ isOpen, onClose }) => {
  // State variables to manage input values and messages
  const [email, setEmail] = useState(""); // For email
  const [password, setPassword] = useState(""); // For password
  const [message, setMessage] = useState(""); // For messages
  const [emailError, setEmailError] = useState(""); // For email error messages
  const [passwordError, setPasswordError] = useState(""); // For password error messages

  // Regular expression for validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for validating password format
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).*$/;

  // Function to validate input
  const validateInput = async () => {
    setMessage(""); // Reset message
    setEmailError(""); // Reset email error
    setPasswordError(""); // Reset password error

    // Check if the email format is valid
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format. Please enter a valid email address.");
      return; // Stop if there's an error
    }

    // Check if the password is long enough
    if (password.length < 8) {
      setPasswordError("Password is too short! It must be at least 8 characters long.");
      return; // Stop if there's an error
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Password must start with an uppercase letter and contain a number.");
      return; // Stop if there's an error
    }

    // Call the API to log in
    try {
      const response = await loginUser(email, password); // Try to log in
      setMessage(response.message); // Set success message
      alert("Login successful!"); // Show success alert
      onClose(); // Close the dialog
    } catch (error) {
      console.error(error); // Log error to the console
      setMessage(error.message); // Set error message
    }
  };

  // If the dialog is not open, return nothing
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <span className="closeButton" onClick={onClose}>
          &times; {/* Close button */}
        </span>
        <h1>SecureAuth Toolkit</h1> {/* Title */}
        <form onSubmit={(e) => {
          e.preventDefault(); // Prevent form from submitting normally
          validateInput(); // Call the validation function
        }}>
          <label htmlFor="input-email">Email:</label>
          <input type="email" id="input-email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <label htmlFor="input-password">Password:</label>
          <input type="password" id="input-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <button type="submit">Submit</button>
          <p>{message}</p> {/* Display message */}
          <p style={{ color: "red" }}>{emailError}</p> {/* Display email error */}
          <p style={{ color: "red" }}>{passwordError}</p> {/* Display password error */}
        </form>
      </div>
    </div>
  );
};

export default LoginDialog; // Export the component
