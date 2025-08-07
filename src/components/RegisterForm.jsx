import { useState } from "react";
import { FaDoorOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleErrorMessage = (message) => {
    toast.error(
      <div className="custom-toast">
        <span className="toast-message">{message}</span>
        <p onClick={() => toast.dismiss()}>X</p>
      </div>,
      {
        position: "bottom-right",
        closeButton: false,
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      const message = "Username is required!";
      handleErrorMessage(message);
    }
    if (!email.trim()) {
      const message = "Email is required!";
      handleErrorMessage(message);
    }
    if (!password.trim()) {
      const message = "Password is required!";
      handleErrorMessage(message);
    }
    if (!confirmPassword.trim()) {
      const message = "Confirm Password is required!";
      handleErrorMessage(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <h1>
        <FaDoorOpen className="door-icon" /> Sign Up
      </h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          name="username"
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          id="password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <button type="submit">Register</button>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
