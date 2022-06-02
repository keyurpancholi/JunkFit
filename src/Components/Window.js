import React,{useContext, useEffect,useState} from "react";
import Fit from "./Fit";
import {ex} from "./ex";
import Carts from "./context";
import Modal from "./Modal";
import './Window.css'
import { useAuth } from "../AuthContext/AuthContext";
import { db } from "../firebase";

function Window(props)
{ const ctx=useContext(Carts)
    const [timerCount, setTimerCount] = useState(5);
    const [stop,setIsStop]=useState(false);
    const [quit,setIsQuit]=useState(false);
    const {currentUser} = useAuth()
    let dcal = ctx.defeceitCal
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
    dcal=dcal+props.cal
    ctx.AddCal(dcal-ctx.defeceitCal)
    db.collection("JunkFit").doc(currentUser.uid).update({
        cal: dcal
    }).then(() => {
        console.log('Saved')
    })
   
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
    let work=<Fit video={props.video}  sets={props.sets}  dur={props.dur}  reps={props.reps } cal={props.cal} name={props.name} type={props.type} onClick={props.onClick}/>
    
    return quit?work:(
        <div id="window">
            <h1 id="tile">CountDown Timer</h1>
           
            <h1 id="time">{timerCount}</h1>
            <div id="stop" >  
            <span>
            <button className="bt1" onClick={handlePause}>Reset</button>
             <button className="bt1" onClick={handleQuit}>Quit</button>
            </span>
          
             </div>
          
        </div>
    )
}
export default Window;