import React, { useState } from "react";
import ReactDom from "react-dom";
import ReactCardFlip from "react-card-flip";
import './Card.css';
function Card(props)
{
    const[isFlipped,setIsFlipped]=useState(false);
    
    const handlehover=()=>
    {
        setIsFlipped(!isFlipped);
    };

    return(
        <ReactCardFlip isFlipped={isFlipped}   flipDirection="vertical">
            <section id="main" >
            <img src={props.img}/>
            <div id="ni">
                
                <span  id="type">{props.type}</span>
                <span id="name">{props.name}</span>
                </div>
                <div id="flip"><a href="/orders/hotels"><button className= "order" >Order Now</button></a>
                <button  onClick={handlehover}  className="order">Read More</button></div>
               </section>

                <section id="main2" >
                <h3>Nutrional information</h3>
                <ul>
                    <li><span className="info">Carbohydrates</span>{props.Carbs}</li>
                    <li><span className="info">Protein</span>{props.Protein}</li>
                    <li><span className="info">Fats</span>{props.Fats}</li>
                    <li><span className="info">Quantity</span>{props.Quantity}</li>
                    <li><span className="info">Calories</span>{props.Calorie}</li>
                </ul>
                <button id="Back"className="order" onClick={handlehover}>Back</button>
        </section>
        </ReactCardFlip>
        
    )
}

export default Card;