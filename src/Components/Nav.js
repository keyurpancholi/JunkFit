import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'


function Nav(){
    return(
        <header id="head">
        <div>
            <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-hand-holding-dumbbell-png-image_5576567.jpg" />
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
export default Nav;