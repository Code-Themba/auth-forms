import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErrorMessage("Email is required.");
      toast.error(
        <div>
          <span className="toast-message">{emailErrorMessage}</span>
        </div>,
        {
          position: "bottom-right",
        }
      );
      console.log("Email is required.");
    }
    if (!password) {
      setPasswordErrorMessage("Password is required.");
      toast.error(
        <div>
          <span className="toast-message">{passwordErrorMessage}</span>
        </div>,
        {
          position: "bottom-right",
        }
      );
      console.log("Password is required.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        <FaUser className="user-icon" />
        Login Form
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
    </form>
  );
};

export default LoginForm;
