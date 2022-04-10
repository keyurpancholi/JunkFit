import React, { Fragment, useContext, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CartItem from "./CartItem";
import Carts from "./context";
import Modal from "./Modal";
import './Cart.css'
function Cart(){
    const ctx=useContext(Carts)
    const[MyModal,setModal]=useState(false);

    const handleDel=(id)=>
    {
     ctx.RemoveFood(id)
    }
    const handleModal=()=>
        {
          setModal(!MyModal)
        }

 let AllItems=ctx.foodItem.map((item)=>  <CartItem name={item.name} image={item.img}
 quantity={item.quantity} price={item.price} calories={item.calories} id={item.id} onDelete={handleDel} onClick={handleModal} ></CartItem>)
 
    return(
           <Fragment>
                {MyModal && <Modal msg="Removed From Cart" onClick={handleModal}/>}
               <Nav></Nav>
               <h2 className="rec">My Cart Items</h2>
               <div id="CartSec" >
            
                   {AllItems}
               </div>
               <Footer></Footer>
           </Fragment>
    )
}
export default Cart;