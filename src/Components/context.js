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
      AddCal :()=>{
        
      }
    }
)
export default Carts