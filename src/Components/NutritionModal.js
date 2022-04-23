import React, { createContext, Fragment, useContext, useState } from "react";
import ReactDOM from "react-dom";
import Modal, { BackDrop } from "./Modal";
import ReactCardFlip from "react-card-flip";
import './PlaceOrder.css';
import OrderComing from "./OrderComing";
import DosaContent from "./FoodContent";
import Carts from "./context";

const Nutrional=(props)=> {
    const context=useContext(Carts)
    
    const back= <section id="backSec" >
        <h3>Calorie BreakUp</h3>
        <ul>
            <li><span>Ingredients</span>Quantity and Calories</li>
            <li><span>{props.ig[0].name}</span>{`${props.ig[0].quantity} , ${props.ig[0].cal} cal`}</li>
            <li><span>{props.ig[1].name}</span>{`${props.ig[1].quantity} , ${props.ig[1].cal} cal`}</li>
            <li><span>{props.ig[2].name}</span>{`${props.ig[2].quantity} , ${props.ig[2].cal} cal`}</li>
            <li><span>Total Calories</span>{`${props.ig[0].cal+props.ig[1].cal+props.ig[2].cal}`}</li>

        </ul>
    <div id="flip">
        <button className="hotel" onClick={props.onClick}>Close</button></div>
        </section>
       
    return (
       <Fragment>
               {back}
            </Fragment>


    )
}
const NutritionModal=(props)=>{
   
    const Hotel=<Nutrional ig={props.ig} onClick={props.onClick} />
   return(
    <Fragment>

        {ReactDOM.createPortal(<BackDrop></BackDrop>,document.getElementById("overlay"))}
   {ReactDOM.createPortal(Hotel, document.getElementById("modal"))}
    </Fragment>
   )

}

export default NutritionModal;