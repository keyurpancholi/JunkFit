import React, { Fragment, useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import './CartItem.css';
import HotelModal from "./PlaceOrder";
import Carts from "./context";

const CartItem=(props)=>
{  
    const [Modal,setModal]=useState(false)
    const ctx=useContext(Carts)
  const[currentQuantity,setQuantity]=useState(props.quantity)
   const handleAddQuantity=()=>
   {
       setQuantity((prevState)=>prevState+1)

   }
  

   
   const handleSubQuantity=()=>
   {   if(currentQuantity>1)
       setQuantity((prevState)=>prevState-1)
      

   }
   const handleDelete=()=>
   {
       props.onDelete(props.id)
       props.onClick();
      

   }
   const handleOrder=()=>
   {
      
       setModal(!Modal)
   }
   
  
   return(

    <Fragment>
     {(Modal)&& <HotelModal onClick={handleOrder} foodName ={props.name} price={props.price} quan={currentQuantity} totalquan={currentQuantity*props.calories} id={props.id} img={props.image}></HotelModal>}
       <div id="cart">
   <h2 id="MyCart">{`Item name : ${props.name}`}</h2>
   <img src={props.image}></img> 
    <ul id="CartInfo">
         <li className="CartDetails">
         {` Total Calories  :   ${props.calories*currentQuantity}`}
        </li>
        <li className="CartDetails">
        {`Quantity: ${currentQuantity}`}
        </li>
        <li className="CartDetails">
        {`Amount per item : ${props.price}`}
        </li>
        <li className="CartDetails">
        {`Total Amount: ${props.price* currentQuantity}`}
        </li>
             
             
    </ul>
    <div>
    <button  onClick={handleAddQuantity}  className="changeQ"> +</button>
    <button  onClick={handleSubQuantity} className="changeQ">-</button>
    <button  onClick={handleDelete} className="changeQ">Remove</button></div>
    <div>
    <button className="order" onClick={handleOrder}>Place Order</button>
    </div> 
    </div>
       
    </Fragment>
   )

}
export default CartItem;