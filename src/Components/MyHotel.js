import React, { Fragment, useContext, useEffect, useState } from "react";
import FoodContent from "./FoodContent";
import HotelContent from "./HotelContent";
import './MyHotel.css'
import Modal from "./Modal";
import Carts from "./context";
import Loc from "./Locations";
import { auth } from "../firebase";



const MyHotel=()=>{
    const [modal,setmodal]=useState(false);
    
   
   const ctx=useContext(Carts);
   const [food,setFood]=useState([])
  
    const handleModal=()=>{
         setmodal(!modal)
    }
    
  
       useEffect(()=>{
        let key=0;
        let lid=0;
        setFood([])
        key=Loc[ctx.MyLoc]
           for(let items of ctx.MyVar)
            { console.log(items.LID)
              if(items.LID-key>0)
              lid=items.LID-key
              else
              lid=key-items.LID
              
              console.log(lid)
              const item={...items,LID:lid}
              setFood((prev)=>[...prev,item])
            
           }
           setFood((prev)=>prev.sort((a,b)=>a.LID-b.LID))
           console.log(ctx.MyVar)
           console.log(food)
           
       },[])

  
   
    
    

    
    const hotels=food.map((item)=> <HotelContent foodimg={item.foodImg} foodName={item.foodItem} price={item.price}
    loc={item.loc} name={item.name} id={item.orderId}   img={item.img} Ingredients={item.Ingredients}
    onClick={handleModal} 
    cal={item.Ingredients[0].cal+item.Ingredients[1].cal+item.Ingredients[2].cal} quantity ={item.quantity} LID={item.LID}

   ></HotelContent>)
    
    return(
        <Fragment>
           {modal && <Modal msg="Added To Cart" onClick={handleModal}></Modal>}
         
         
           
           <section id="Variety">
               <h1 className="rec">Recommended Places</h1>
              {auth.currentUser && <div id="filter">Filtered by Nearest to Location</div>}
               {hotels}

           </section>
           </Fragment>
    )
}
export default MyHotel