import React, { Fragment, useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import './CartItem.css';
import HotelModal from "./PlaceOrder";
import Carts from "./context";

const CartItem=(props)=>
{  
    
  const[currentQuantity,setQuantity]=useState(props.quantity)
  const handleAddQuantity=()=>
   {
       setQuantity((prevState)=>prevState+1)
       
      
   }
    useEffect(()=>{
      props.onPlace(props.id,currentQuantity)
    },[currentQuantity])

   
   const handleSubQuantity=()=>
   {   if(currentQuantity>1)
       setQuantity((prevState)=>prevState-1)
      
       

   }
  
   const handleDelete=()=>
   {
       props.onDelete(props.id)
       props.onClick();
      

   }
  
   return(

    <Fragment>
     <div id="cart">
   <h2 id="MyCart">{`Item name : ${props.name}`}</h2>
   <img src={props.image}></img> 
    <ul id="CartInfo">
    <li className="CartDetails">
         {` Restaurent :   ${props.hotel}`}
        </li>
        <li className="CartDetails">
         {` Location :   ${props.loc}`}
        </li>
         <li className="CartDetails">
         {` Total Calories  :   ${props.calories*currentQuantity}`}
        </li>
        <li className="CartDetails">
        {`Quantity: ${currentQuantity}`}
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
   
    </div> 
    </div>
       
    </Fragment>
   )

}
export default CartItem;