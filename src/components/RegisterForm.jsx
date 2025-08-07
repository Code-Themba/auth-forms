import React from "react";
import { FaDoorOpen } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <form>
      <h1>
        <FaDoorOpen /> Register
      </h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
