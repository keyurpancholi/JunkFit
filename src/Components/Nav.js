import React, { useState } from "react";
import "./Nav.css";
import About from "./About";
import { useAuth } from "../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [about, setAbout] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const change = () => {
    setAbout(!about);
  };

  async function logoutHandler() {
    try {
      await logout();
      navigate("/");
    } catch {
      console.log("Failed to login");
    }
  }

  if (about === true) {
    return (
      <div id="nav">
        <header id="head">
          <div id="intro">
            <i class="fas fa-bars" onClick={change}></i>
            <span id="logo">JunkFit</span>
          </div>
          <div id="mid">
            <Link to={"/"} className="links">
              Home
            </Link>
            <Link to={"/workout"} className="links">
              Workout
            </Link>
            <Link to={"/order"} className="links">
              Order
            </Link>
            <Link to={"/"} className="links">
              Profle
            </Link>
          </div>
          <div id="log">
            <a href="">
              <button id="but1">Login</button>
            </a>
            <a href="">
              <button id="but2">Sign Up</button>
            </a>
          </div>
        </header>
        <About />
      </div>
    );
  } else {
    return (
      <header id="head">
        <div id="intro">
          <i className="fas fa-bars" onClick={change}></i>
          <span id="logo">JunkFit</span>
        </div>
        {currentUser ? (
          <div id="mid">
            <Link to={"/"} className="links">
              Home
            </Link>
            <Link to={"/workout"} className="links">
              Workout
            </Link>
            <Link to={"/orders"} className="links">
              Order
            </Link>
            <Link to={"/Cart"} className="links">Cart</Link>
            
            <Link to={"/Profile"} className="links">
              Profile
            </Link>
          </div>
        ) : (
          <div id="mid">
            <Link to={"/"} className="links">
              Home
            </Link>
            <Link to={"/workout"} className="links">
              Workout
            </Link>
            <Link to={"/orders"} className="links">
              Order
            </Link>
          </div>
        )}
        {currentUser ? (
          <div id="log">
            <Link to={"/"}>
              <button id="but1" onClick={logoutHandler}>
                Log out
              </button>
            </Link>
            <Link to={"/Cart/Summary"}>
              <button id="but2">
                History
              </button>
            </Link>
          </div>
        ) : (
          <div id="log">
            <Link to={"/Login"}>
              <button id="but1">Login</button>
            </Link>
            <Link to={"/Signup"}>
              <button id="but2">Sign Up</button>
            </Link>
          </div>
        )}
      </header>
    );
  }
}
export default Nav;