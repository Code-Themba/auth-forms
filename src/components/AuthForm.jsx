import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser, FaDoorOpen } from "react-icons/fa";

const emailRegex = !/\S+@\S+\.\S+/;

const AuthForm = ({ mode = "login" }) => {
  const navigate = useNavigate();

  //Shared State
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isRegistering = mode === "register";

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

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validForm = () => {
    if (isRegistering && !formData.username.trim()) {
      return "Username is required!";
    }
    if (!formData.email.trim()) {
      return "Email is required!";
    }
    if (emailRegex.test(formData.email)) {
      return "Invalid email format!";
    }
    if (!formData.password.trim()) {
      return "Password is required!";
    }
    if (isRegistering && !formData.confirmPassword.trim()) {
      return "Confirm Password is required!";
    }
    if (isRegistering && formData.password !== formData.confirmPassword) {
      return "Passwords do not match!";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validForm();
    if (error) return handleErrorMessage(error);

    try {
      if (isRegistering) {
        toast.success("Account created Successfully!");
        navigate("/login");
      } else {
        // api login return here
        toast.success("Welcome back!");
      }
    } catch (error) {
      handleErrorMessage(error.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        {isRegistering ? (
          <FaDoorOpen className="door-icon" />
        ) : (
          <FaUser className="user-icon" />
        )}
        {isRegistering ? "Sign Up" : "Sign In"}
      </h1>

      {isRegistering && (
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            id="username"
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
        />
      </div>
      {isRegistering && (
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
          />
        </div>
      )}
      <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      <p>
        {isRegistering ? (
          <>
            Already have an account? <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            Don't have an account? <Link to="/register">Register</Link>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
