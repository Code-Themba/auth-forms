import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      const message = "Email is required!";
      handleErrorMessage(message);
    }
    if (!password) {
      const message = "Password is required!";
      handleErrorMessage(message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        <FaUser className="user-icon" />
        Sign in
      </h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          id="password"
        />
      </div>
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
