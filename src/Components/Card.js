import React, { useContext, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import './Card.css';
import Carts from "./context";
function Card(props)
{    const ctx=useContext(Carts)
   
    const[isFlipped,setIsFlipped]=useState(false);
    const handlehover=()=>
    {
        setIsFlipped(!isFlipped);
    };
    useEffect(()=>{
      ctx.Reset();
    },[])
      const handleClick=()=>{
       ctx.updateItem(props.name)
       console.log(props.name)
       
      }
   
  
    
    return(
        <ReactCardFlip isFlipped={isFlipped}   flipDirection="vertical">
            <section id="main" >
            <img src={props.img}/>

            <div id="ni">
                
                <span  id="type">{props.type}</span>
                <span id="name">{props.name}</span>
                </div>
                <div id="flip"><Link to={"/orders/Hotels"}><button className= "order" onClick={handleClick}>Check Variety</button></Link>
                <button  onClick={handlehover}  className="order">Read More</button></div>
               </section>

                <section id="main2" >
                <h3>Nutrional information</h3>
                <ul>
                    <li><span className="info">Carbohydrates</span>{props.Carbs}</li>
                    <li><span className="info">Protein</span>{props.Protein}</li>
                    <li><span className="info">Fats</span>{props.Fats}</li>
                    <li><span className="info">Quantity</span>{`${props.quantity} serving`}</li>
                    <li><span className="info">Calories</span>{props.Calorie}</li>
                </ul>
                <button id="Back"className="order" onClick={handlehover}>Back</button>
        </section>
        </ReactCardFlip>
        
    )
}

export default Card;
