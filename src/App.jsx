import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AuthForm from "./components/AuthForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
