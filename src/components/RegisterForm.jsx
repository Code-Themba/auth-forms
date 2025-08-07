import { useState } from "react";
import { FaDoorOpen } from "react-icons/fa";

const RegisterForm = () => {
  const [username, setUsername] = useState("");

  return (
    <form>
      <h1>
        <FaDoorOpen className="door-icon" /> Register
      </h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
