import React, { createContext } from "react";
const Carts= React.createContext(
    {   foodItem :[],
      AddFood :()=>{},
      RemoveFood :()=>{},
      OrderItem:[],
      AddOrder :()=>{},
      RemoveOrder :()=>{},
      RemoveCal :()=>{},
      defeceitCal:500,
      orderId:100,
      AddCal :()=>{
        
      },
    
      updateItem:()=>{},
      MyVar:[],
      MyLoc:"",
      updateLoc:()=>{},
      Sort:()=>{}
    }
)
export default Carts