import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser, FaDoorOpen } from "react-icons/fa";
import AltAuthButtons from "./AltAuthButtons";

const emailRegex = /\S+@\S+\.\S+/;
const AuthForm = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");

  //Shared State
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
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

  const switchMode = (newMode) => {
    setMode(newMode);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
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

      <div className="auth-divider">
        <span>OR</span>
      </div>
      {/* Alternative Login Buttons */}
      <AltAuthButtons mode={mode} />
      <p>
        {isRegistering ? (
          <>
            Already have an account?{" "}
            <li className="link-button" onClick={() => switchMode("login")}>
              Login
            </li>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <li className="link-button" onClick={() => switchMode("register")}>
              Register
            </li>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
