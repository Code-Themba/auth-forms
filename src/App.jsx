import { ToastContainer } from "react-toastify";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <>
      {/* <LoginForm /> */}
      <RegisterForm />
      <ToastContainer />
    </>
  );
};

export default App;
