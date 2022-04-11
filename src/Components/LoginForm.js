import { useRef, useState } from "react";
import "./LoginForm.css";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setIsLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    } catch {
      setError("Failed to login");
    }
    setIsLoading(false);
  }

  return (
    <div className="outerdiv-login">
      <div className="logindiv">
        <form onSubmit={handleSubmit}>
          <div className="login-heading">
            <h1>Log In</h1>
          </div>
          <div className="login-email">
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              ref={emailRef}
              id="login-email"
              required
            ></input>
          </div>
          <div className="login-password">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              ref={passwordRef}
              id="login-password"
              required
            ></input>
          </div>
          <button
            type="submit"
            className="loginform-submit"
            disabled={isLoading}
          >
            Log In
          </button>
          <div className="signup1-instead">
            <p>
              Don't have an account? <a href="/Signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;