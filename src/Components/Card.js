import React, { useState } from "react";
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
            <section id="main" onClick={handlehover}>
            <img src={props.img} alt="" />
            <div id="ni">
                
                <span  id="type">{props.type}</span>
                <span id="name">{props.name}</span>
                </div>
                <div id="flip"><a href="/"><button id= "order" >Order Now</button></a></div>
               </section>

                <section id="main2" onClick={handlehover}>
                <h3>Nutrional information</h3>
                <ul>
                    <li><span className="info">Carbs</span>{props.Carbs}</li>
                    <li><span className="info">Protein</span>{props.Protein}</li>
                    <li><span className="info">Fats</span>{props.Fats}</li>
                    <li><span className="info">Calorie</span>{props.Calorie}</li>
                    <li><span className="info">Quantity</span>{props.Quantity}</li>
                </ul>
        </section>
        </ReactCardFlip>
        
    )
}

export default Card;