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
      MyVar:[]
    }
)
export default Carts