import React,{useState} from "react";
import ReactCardFlip from "react-card-flip";
import './Fit.css';
import Window from "./Window";

function Fit(props)
{
    const [isFlipped, setIsFlipped] = useState(false);
    
    const [isClick, setIsClick] = useState(false);

    const handleClick=()=>
    {
        setIsClick(!isClick);
    
    }
    
    const handlehover=()=>
    {
        setIsFlipped(!isFlipped);
        
        
    };

    let window =<Window /> 

    return isClick ? window : (
        <ReactCardFlip isFlipped={isFlipped}   flipDirection="vertical">
            <section id="front">
            <iframe id="play" width="350" height="600" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
             
            </iframe>
            <h3 id="heading">Push-Ups</h3>
         
            <div id="button">
                <button  onClick={handleClick} className="b">
                    Burn It Out
                </button>
                <button onClick={handlehover} className="b">
                    Read More
                    </button>
            </div>

               </section>

                <section id="back" >
                <h3>Excercise information</h3>
                  <ul>
                   <li><span className="info">Sets</span>{props.sets}</li>
                    <li><span className="info">Duration</span>{props.dur}</li>
                    <li><span className="info">Reps</span>{props.reps}</li>
                    <li><span className="info">Calorie</span>{props.cal}</li>
                  </ul>
                <div id="return">
                <button onClick={handlehover} className="b">
                    Back
                    </button>
                </div>
               
                </section>
        </ReactCardFlip>
        
    )
}

export default Fit;
