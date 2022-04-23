import React, { Fragment, useContext, useEffect, useState } from "react";
import FoodContent from "./FoodContent";
import HotelContent from "./HotelContent";
import './MyHotel.css'
import Modal from "./Modal";
import Carts from "./context";

const MyHotel=()=>{
    const [modal,setmodal]=useState(false);
   
   const ctx=useContext(Carts);
   
  
    const handleModal=()=>{
         setmodal(!modal)
    }
    
    const hotels=ctx.MyVar.map((item)=> <HotelContent foodimg={item.foodImg} foodName={item.foodItem} price={item.price}
    loc={item.loc} name={item.name} id={item.orderId}   img={item.img} Ingredients={item.Ingredients}
    onClick={handleModal} 
    cal={item.Ingredients[0].cal+item.Ingredients[1].cal+item.Ingredients[2].cal} quantity ={item.quantity}

   ></HotelContent>)
    
    return(
        <Fragment>
           {modal && <Modal msg="Added To Cart" onClick={handleModal}></Modal>}
         
         
           
           <section id="Variety">
               <h1 className="rec">Recommended Places</h1>
               {hotels}

           </section>
           </Fragment>
    )
}
export default MyHotel