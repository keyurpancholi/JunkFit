import React, { useRef, useState } from "react";
import "./SignUpForm.css";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom"

function SignUpForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  // function handleErrorPortal(){
  //   setIsLoading(false)
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords dont match");
    }

    try {
      setError("");
      setIsLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    } catch {
      setError("Failed to create an account");
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="outerdiv-signup">
        <div className="signupdiv">
          <form onSubmit={handleSubmit}>
            <div className="signup-heading">
              <h1>Sign Up</h1>
            </div>
            <div className="signup-email">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                ref={emailRef}
                id="signup-email"
                required
              ></input>
            </div>
            <div className="signup-password">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                ref={passwordRef}
                id="signup-password"
                required
              ></input>
            </div>
            <div className="signup-confirm-password">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                type="password"
                ref={passwordConfirmRef}
                id="signup-confirm-password"
                required
              ></input>
            </div>
            <button
              type="submit"
              className="signupform-submit"
              disabled={isLoading}
            >
              Sign Up
            </button>
            <div className="login-instead">
              <p>
                Already have an account? <a href="/Login">Log In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* <Error isEnabled={handleErrorPortal}>Loading...</Error> */}
    </>
  );
}

export default SignUpForm;