import React,{Fragment } from "react";
import ReactDOM  from "react-dom";
import './Modal.css'

export const BackDrop=(props)=>
{
  return(
    <div className="overlay" onClick={props.onModal} />
  )
}
const Message=(props)=>{
    return(
  <div className="modal">
    <h2>Message</h2>
    <span>{props.msg}</span>
    <span><button onClick={props.onModal}>Ok</button></span>
  </div>
    )
}

const Modal=(props)=>
{
  return(
    
    <Fragment>
    {ReactDOM.createPortal(<BackDrop onModal={props.onClick}></BackDrop>,document.getElementById("overlay"))}
   {ReactDOM.createPortal(<Message  msg={props.msg} onModal={props.onClick}></Message>,document.getElementById("modal"))}
    </Fragment>
  )
}
export default Modal
