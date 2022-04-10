import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './OrderComing.css'
import Carts from "./context";
function OrderComing(props){
    const ctx=useContext(Carts)
    const handleClose=()=>{
        props.onClose()
        ctx.RemoveFood(props.id)
       
    }
    
    if(ctx.defeceitCal>=0)
    {
    return(
        <div id="MyOrder">
        <h1>Order Placed ....</h1>
        <div>
        <h2>Calories To Spare</h2>
        <span>{ctx.defeceitCal+props.cal}</span>
        <h2>Calories Remaining</h2>
        <span>{ctx.defeceitCal}</span>
        <h2>Good to Go!!!</h2>
        </div>
        <div>
        <Link to={"/Cart/Summary"}><button className="order"onClick={handleClose}>Order Summary</button></Link>
        <button className="order" onClick={handleClose}>Back To Cart</button>
        </div>
      
        </div>
        
    )
    }
    else{
        return(
        <div id="MyOrder">
        <h1>Order Placed ....</h1>
        <div>
        <h2>Calories To Spare</h2>
        <span>{(ctx.defeceitCal+props.cal)>=0?ctx.defeceitCal+props.cal:0}</span>
        <h2>Excess Calories Consumed</h2>
        <span>{-(ctx.defeceitCal)}</span>
        <h2>You need to burn {-(ctx.defeceitCal)} calories</h2>
        </div>
        <div>
        <Link to ={"/workout/create"}><button className="order"onClick={handleClose}> Workout Section</button></Link>
        <Link to={"/Cart/Summary"}><button className="order" onClick={handleClose}>Order Summary</button></Link>
        <button className="order" onClick={handleClose}>Back To Cart</button>
        </div>
        </div>
        )
    }
}
export default OrderComing;
