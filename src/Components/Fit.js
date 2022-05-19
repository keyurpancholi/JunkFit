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

    let window =<Window  onClick={props.onClick}  video={props.video} cal={props.cal} sets={props.sets} type={props.type} reps={props.reps} dur={props.dur} gif={props.gif} name={props.name}/> 

    return isClick ? window : (
        <ReactCardFlip isFlipped={isFlipped}   flipDirection="vertical">
            <section id="front">
            <iframe id="play"  src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
             
            </iframe>
            <h3 className="ExHead">{props.name}</h3>
         
            <div id="button">
                <button  onClick={handleClick} className="order">
                    Burn It Out
                </button>
                <button onClick={handlehover} className="order">
                    Read More
                    </button>
            </div>

               </section>

                <section id="back" >
                <h3 className="ExHead">Excercise information</h3>
                  <ul>
                    <li><span className="info">Sets</span>{props.sets}</li>
                    <li><span className="info">Duration</span>{props.dur}</li>
                    <li><span className="info">Reps</span>{props.reps}</li>
                    <li><span className="info">Calories Burned</span>{props.cal}</li>
                    <li><span className="info">Targeted Muscle</span>{props.type}</li>
                  </ul>
                <div id="return">
                <button onClick={handlehover} className="order">
                    Back
                    </button>
                </div>
               
                </section>
        </ReactCardFlip>
        
    )
}

export default Fit;
