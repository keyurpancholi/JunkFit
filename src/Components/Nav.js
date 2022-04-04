import React, { useState } from "react";
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
    if(about===true)
    {
    return(
        <div id="nav">
        <header id="head">
        <div id="intro">
            <i class="fas fa-bars" onClick={change}>
            </i>
                <span id="logo">JunkFit</span>
    
            </div>
        <div id="mid">
            <a href="/" className="links">Home</a>
            <a href="/workout" className="links">Workout</a>
            <a href="/orders" className="links">Order</a>
            <a href="/" className="links">Profile</a>
        </div>
        <div id="log">
        <a href=""><button id="but1">Login</button></a> 
        <a href=""><button id="but2">Sign Up</button></a> 
        </div>
         
        </header>
        <About/>
        </div>
        

    )
    }
    else{
        return(
            <header id="head">
            <div id="intro">
            <i class="fas fa-bars" onClick={change}>
            </i>
                <span id="logo">JunkFit</span>
    
            </div>
            <div id="mid">
                <a href="/" className="links">Home</a>
                <a href="/workout" className="links">Workout</a>
                <a href="/orders" className="links">Order</a>
                <a href="/" className="links">Profile</a>
            </div>
            <div id="log">
            <a href=""><button id="but1">Login</button></a> 
            <a href=""><button id="but2">Sign Up</button></a> 
            </div>
             
            </header>
    
        )
    }
}
export default Nav;