
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.css'
import About from "./About";

function Nav(){
    const [about,setAbout]=useState(false);
    const change=()=>
    {
        setAbout(!about);
    }
    return(
         <Fragment>
            <header id="head">
            <div id="intro">
            <i class="fas fa-bars" onClick={change}>
            </i>
                <span id="logo">JunkFit</span>
    
            </div>
            <div id="mid">
            <Link to={"/"} className="links">Home</Link>
            <Link to={"/workout"} className="links">Workout</Link>
            <Link to={"/orders"} className="links">Order</Link>
            <Link to={"/Cart"} className="links">Cart</Link>
                <Link to={"/"} className="links">Profile</Link>
            </div>
            <div id="log">
            <a href=""><button id="but1">Login</button></a> 
            <a href=""><button id="but2">Sign Up</button></a> 
            </div>
             
            </header>
            {(about)&& <About/>}
            </Fragment>
    
        )
    }

  export default Nav;
