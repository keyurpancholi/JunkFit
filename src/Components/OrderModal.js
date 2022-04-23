import React, { createContext, Fragment, useContext, useState } from "react";
import ReactDOM from "react-dom";
import Modal, { BackDrop } from "./Modal";
import './PlaceOrder.css';
import OrderComing from "./OrderComing";
import Carts from "./context";


const OrderModal=(props)=>{
   
    const MyOrder=<OrderComing cal={props.cal} onClose={props.onClose}></OrderComing>

   return(
    <Fragment>

        {ReactDOM.createPortal(<BackDrop></BackDrop>,document.getElementById("overlay"))}
   {ReactDOM.createPortal(MyOrder, document.getElementById("modal"))}
    </Fragment>
   )

}

export default OrderModal;