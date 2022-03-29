import React from "react";
import Fit from "./Fit";
import './WorkLib.css';
function WorkLib()
{
    const chest=[{
        video:"https://www.youtube.com/embed/IODxDxX7oi4",
        cal: "41"   ,
        reps:"10-12"  ,
        dur:"60 seconds"  ,
        sets : 4


    },
  ]
    return(
        <div id="content">
        
          <h2 className="ex">Chest Excercises</h2>
          <section id="section">
          <Fit video={chest[0].video}  sets={chest[0].sets}  dur={chest[0].dur}  reps={chest[0].reps } cal={chest[0].cal}/>
          </section>
          <h2 className="ex">Abs Excercises</h2>
          <h2 className="ex">Shoulder Excercises</h2>
          <h2 className="ex">Arms Excercises</h2>
          <h2 className="ex">Cardio Excercises</h2>

        </div>
        
    )
}
export default WorkLib;