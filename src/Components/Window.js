import React,{useEffect,useState} from "react";

import './Window.css'
function Window()
{
    const [timerCount, setTimerCount] = useState(60);
    useEffect(() => {
        setTimeout(() => {
            if (timerCount > 0) {
                setTimerCount(timerCount - 1);
                setTimeout(this, 1000)
            }
        }, 1000)

    })
    
    return(
        <div id="window">
            <h1 id="tile">CountDown Timer</h1>
           
            <h1 id="time">{timerCount}</h1>
            <div id="stop" >  <button id="bt">Stop</button></div>
          
        </div>
    )
}
export default Window;