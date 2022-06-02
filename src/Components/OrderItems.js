import React, { createContext, Fragment, useContext, useState } from "react";
import Carts from "./context";
import './CartItem.css';
import { useAuth } from "../AuthContext/AuthContext";
import { db } from "../firebase";
const OrderItems=(props)=>{
    const ctx= useContext(Carts)
    const {currentUser} = useAuth()
    let dcal = ctx.defeceitCal
   
   const handleRemove=()=>{
       
       ctx.RemoveOrder(props.orderId);
       props.onClick();
       dcal=dcal+props.calories
       db.collection("JunkFit").doc(currentUser.uid).update({
           cal: dcal
       }).then(() => {
           console.log('Saved')
       })
      
      
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

