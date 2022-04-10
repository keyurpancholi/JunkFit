import React,{useContext, useEffect,useState} from "react";
import Fit from "./Fit";
import {ex} from "./ex";
import Carts from "./context";
import Modal from "./Modal";
import './Window.css'

function Window(props)
{ const ctx=useContext(Carts)
    const [timerCount, setTimerCount] = useState(5);
    const [stop,setIsStop]=useState(false);
    const [quit,setIsQuit]=useState(false);
 

    useEffect(() => {
        if(stop===false)
        {
            if(timerCount>0)
            {
        setTimeout(() => {
            if (timerCount > 0) {
                setTimerCount(timerCount - 1);
            }
        }, 1000)
    }
    else{
        props.onClick();
    setIsQuit(true)
    ctx.AddCal(ex[0].cal)
   
     }
    }
    else
    {
    setTimerCount(5);
    setIsStop(false);
    
    }

    },[timerCount])
    
    const handlePause=()=>{
      
        setIsStop(!stop);

    }
    const handleQuit=()=>{
        setIsQuit(!quit);
        

    }
    let work=<Fit video={ex[0].video}  sets={ex[0].sets}  dur={ex[0].dur}  reps={ex[0].reps } cal={ex[0].cal} name={ex[0].name} type={ex[0].type} onClick={props.onClick}/>
    
    return quit?work:(
        <div id="window">
            <h1 id="tile">CountDown Timer</h1>
           
            <h1 id="time">{timerCount}</h1>
            <div id="stop" >  
            <img src={ex[0].gif}></img>
            <span>
            <button className="bt1" onClick={handlePause}>Reset</button>
             <button className="bt1" onClick={handleQuit}>Quit</button>
            </span>
          
             </div>
          
        </div>
    )
}
export default Window;