import React, { useState } from "react";
import { ex } from "./ex";
import Fit from "./Fit";
import './Routine.css'

function Routine(props){
    
    const ChestEx=ex.filter((exs)=>exs.type==="Chest");
    const ArmsEx=ex.filter((exs)=>exs.type==="Arms");
    const LegsEx=ex.filter((exs)=>exs.type==="Legs");
    const AbsEx=ex.filter((exs)=>exs.type==="Abs");
    const BackEx=ex.filter((exs)=>exs.type==="Back")
    const [disp,setDisp]=useState();
    const count=Math.floor(Math.random()*1);
    
    
   
    const fit1=<Fit video={ChestEx[count].video}  
    sets={ChestEx[count].sets}  
    dur={ChestEx[count].dur} 
    reps={ChestEx[count].reps} 
    cal={ChestEx[count].cal} 
    name={ChestEx[count].name} 
    type={ChestEx[count].type}/>

    const fit2=<Fit video={ArmsEx[count].video}  
    sets={ArmsEx[count].sets}  
    dur={ArmsEx[count].dur} 
    reps={ArmsEx[count].reps} 
    cal={ArmsEx[count].cal} 
    name={ArmsEx[count].name} 
    type={ArmsEx[count].type}/>

    const fit3=<Fit video={LegsEx[count].video}  
    sets={LegsEx[count].sets}  
    dur={LegsEx[count].dur} 
    reps={LegsEx[count].reps} 
    cal={LegsEx[count].cal} 
    name={LegsEx[count].name} 
    type={LegsEx[count].type}/>


    const fit4=<Fit video={AbsEx[count].video}  
    sets={AbsEx[count].sets}  
    dur={AbsEx[count].dur} 
    reps={AbsEx[count].reps} 
    cal={AbsEx[count].cal} 
    name={AbsEx[count].name} 
    type={AbsEx[count].type}/>

    const fit5=<Fit video={BackEx[count].video}  
    sets={BackEx[count].sets}  
    dur={BackEx[count].dur} 
    reps={BackEx[count].reps} 
    cal={BackEx[count].cal} 
    name={BackEx[count].name} 
    type={BackEx[count].type}/>

    let routines = []
    if(props.chest) routines.push(fit1)
    if(props.arms)routines.push(fit2)
    if(props.legs)routines.push(fit3)
    if(props.abs)routines.push(fit4)
    if(props.abs)routines.push(fit5)
     
    while(routines.length > 3)
    routines.pop()



    return(
        <div id="outer">
        <h1>{props.day}</h1>
        
        <div className="allWork">
           {routines}
        </div>
        </div>
    )
}
export default Routine;

