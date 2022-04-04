import React from "react";
import Fit from "./Fit";
import './WorkLib.css';
import {ex} from "./ex";
function WorkLib()
{
  
    return(
        <div id="AllEx">
        
          <h2 className="rec">Recomended Excercises</h2>
          <section id="workCat">
                <button className="order" >All-Workouts</button>
                <button className="order" >Chest and Traps</button>
                <button className="order" >Back and Shoulders</button>
                <button className="order" >Legs and Calves</button>
                <button className="order" >Bicep and Tricep</button>
                <button className="order" >Abs and Cardio</button>
                </section>
          <section id="section">
          <Fit video={ex[0].video}  sets={ex[0].sets}  dur={ex[0].dur}  reps={ex[0].reps } cal={ex[0].cal} name={ex[0].name} type={ex[0].type}/>
          </section>
    
           <div><a href="/workout/create"><button className="order" >Create Personal Workout Schedule</button></a></div>
        </div>
        
    )
}
export default WorkLib;