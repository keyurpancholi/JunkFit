import React, { createContext, Fragment, useContext, useState } from "react";
import ReactDOM from "react-dom";
import Modal, { BackDrop } from "./Modal";
import ReactCardFlip from "react-card-flip";
import './PlaceOrder.css';
import OrderComing from "./OrderComing";
import DosaContent from "./FoodContent";
import Carts from "./context";

const PlaceOrder=(props)=> {
    const context=useContext(Carts)

   const [count,setcount]=useState(0)
   const handleCount=()=>{
       setcount((prev)=>(prev+1)%4)
   }
    
    const front= <section id="FrontSec" style={{ background: `url(${props.img[count]})` }}>
    
    <div id="HotelPlace">
        <span id="loc">{props.loc}</span>
        <span id="Place">{props.name}</span>
    </div>
    <div id="flip">
        <button className="hotel" onClick={props.onClick}>Close</button>
        <button className="hotel" onClick={handleCount}>Next</button></div>
        </section>
       
    return (
       <Fragment>
               {front}
            </Fragment>


    )
}
const HotelModal=(props)=>{
   
    const Hotel=<PlaceOrder name={props.name} loc={props.loc} onClick={props.onClick} img={props.img}/>
   return(
    <Fragment>

        {ReactDOM.createPortal(<BackDrop></BackDrop>,document.getElementById("overlay"))}
   {ReactDOM.createPortal(Hotel, document.getElementById("modal"))}
    </Fragment>
   )

}

export default HotelModal;