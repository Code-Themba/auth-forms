import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <h1>
        <FaUser />
        Login Form
      </h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
