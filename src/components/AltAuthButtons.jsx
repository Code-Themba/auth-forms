import { FaGoogle, FaFacebook } from "react-icons/fa";

const AltAuthButtons = ({ mode }) => {
  // Alternative Social Sign-in handlers
  const handleGoogleSignIn = () => {
    console.log("Signing in with Google...");
  };

  const handleFacebookSignIn = () => {
    console.log("Signing in with Facebook...");
  };
  return (
    <div className="social-buttons">
      <button type="button" className="google-btn" onClick={handleGoogleSignIn}>
        <FaGoogle />{" "}
        {mode === "login" ? "Continue with Google" : "Sign up with Google"}
      </button>
      <button
        type="button"
        className="facebook-btn"
        onClick={handleFacebookSignIn}
      >
        <FaFacebook />{" "}
        {mode === "login" ? "Continue with Facebook" : "Sign up with Facebook"}
      </button>
    </div>
  );
};

export default AltAuthButtons;
