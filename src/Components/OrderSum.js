import React, { Fragment, useContext, useState } from "react";
import Carts from "./context";
import './OrderSum.css'
import Modal from "./Modal";
import OrderItems from "./OrderItems";
import { useAuth } from "../AuthContext/AuthContext";
import { db } from "../firebase";
const OrderSum=()=>{
    
const handleOrders=()=>{
    console.log(ctx.OrderItem);
    console.log(visible)
}
const [visible,setvisible]=useState(false)
const ctx=useContext(Carts)

const handleModal=()=>{
    setvisible(!visible)
}
const MyOrders=ctx.OrderItem.map((item)=><OrderItems id={item.id} name={item.name} foodImg={item.foodImg} calories={item.calories} loc={item.loc} hotel={item.hotel} price={item.price} onClick={handleModal} orderId={item.orderId}></OrderItems>
)
if(ctx.OrderItem[0]!==undefined)
{
return(
    <Fragment>
        {(visible) && <Modal msg="Order Removed Succesfully" onClick={handleModal}></Modal>}
    <h1 className="rec">My Orders</h1>

    <div id="OrderSec" onClick={handleOrders}>
  {MyOrders}
  </div>
  </Fragment>
)
}
else{
    return(
        <Fragment>
             {(visible) && <Modal msg="Order Removed Succesfully" onClick={handleModal}></Modal>}
        <h1 className="rec">No Orders Yet</h1>
        <div id="OrderSec"  onClick={handleOrders}>
        </div>
        </Fragment>
    )
}
}
export default OrderSum