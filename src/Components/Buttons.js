import React from "react";
import './Button.css';
function Button(props){
    return(
        <div id="bt"> 
        <a href="/orders"><button id="b1"> {props.text1}</button></a> 
        <a href=""><button id="b2"> {props.text2}</button></a> 
        </div>
    )

}
export default Button;