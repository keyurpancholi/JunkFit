import React, { useState } from "react";
import ReactDom from "react-dom";
import ReactCardFlip from "react-card-flip";
import './PlaceOrder.css';
import OrderComing from "./OrderComing";
import DosaContent from "./DosaContent";

function PlaceOrder(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const[visible,setVisible]=useState(false);
    const calories=500;
    const handlehover=()=>
    {
        setIsFlipped(!isFlipped)
    }
   const handleOrder=()=>
   {
       setVisible(!visible)
   }
   if(visible===true)
   {
       return(
       <OrderComing daily={calories} cal={props.calR+props.calU+props.calO}/>)
   }
   else
   {
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <section id="FrontSec" style={{ background: `url(${props.img})` }}>
                <div id="HotelPlace">
                    <span id="loc">{props.loc}</span>
                    <span id="Place">{props.name}</span>
                </div>
                <div id="flip"><button className="hotel" onClick={handleOrder} >Place Order</button>
                    <button className="hotel" onClick={handlehover}>Read More</button></div>

            </section>

            <section id="backSec" >
                <h3>Dosa Information</h3>
                <ul>
                    <li><span className="info">Ingredients</span>Quantity And Calories</li>
                    <li><span className="info">Rice</span>{props.quantityR+", "+ props.calR}</li>
                    <li><span className="info">Urad-Dal</span>{props.quantityU+", "+props.calU}</li>
                    <li><span className="info">Oil/Ghee</span>{props.quantityO+", "+props.calO}</li>
                    <li><span className="info">Total Calories</span>{props.calR+props.calU+props.calO}</li>
                    <li><span className="info">Rating</span>{props.rat}</li>
   


                </ul>
                <button className="hotel" id="backTo" onClick={handlehover}>Back</button>
            </section>
        </ReactCardFlip>

    )

}
}

export default PlaceOrder;