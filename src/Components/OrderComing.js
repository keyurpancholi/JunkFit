import React from "react";
import './OrderComing.css'
function OrderComing(props){
    const sub=props.daily-props.cal
    if(sub>=0)
    {
    return(
        <div id="MyOrder">
        <h1>Order Placed ....</h1>
        <div>
        <h2>Calories To Spare</h2>
        <span>{props.daily}</span>
        <h2>Calories Remaining</h2>
        <span>{sub}</span>
        <h2>Good to Go!!!</h2>
        </div>
        <button className="order">Order Summary</button>
        </div>
        
    )
    }
    else{
        return(
        <div id="MyOrder">
        <h1>Order Placed ....</h1>
        <div>
        <h2>Calories To Spare</h2>
        <span>{props.daily}</span>
        <h2>Excess Calories Consumed</h2>
        <span>{-sub}</span>
        <h2>You need to excercise</h2>
        </div>
        <a href="/workout/create"><button className="order"> Workout Section</button></a>
        </div>
        )
    }
}
export default OrderComing;
