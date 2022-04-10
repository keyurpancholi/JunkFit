import React, { createContext, Fragment, useContext, useState } from "react";
import Carts from "./context";
import './CartItem.css';
const OrderItems=(props)=>{
  
    const ctx= useContext(Carts)
   const handleRemove=()=>{
       
       ctx.RemoveOrder(props.id);
       props.onClick();
       ctx.AddCal(props.calories);
      
   }
 
  
    return(    
        <Fragment>
               
                   <div id="cart">
                       <h2 id="MyCart">{`Item name : ${props.name}`}</h2>
                        <img src={props.foodImg}></img>
                        <ul id="CartInfo">
                        <li className="CartDetails">
                        {` Total Calories  :   ${props.calories}`}
                        </li>
                        <li className="CartDetails">
                        {`Hotel: ${props.hotel}`}
                         </li>
                        <li className="CartDetails">
                        {`Location: ${props.loc}`}
                         </li>
                          <li className="CartDetails">
                         {`Total Amount: ${props.price}`}
                        </li>
                        </ul>
                        <button className="order" onClick={handleRemove}>Cancel Order</button>
                   </div>
                   </Fragment>
                   

              
    )


}
export default OrderItems;

