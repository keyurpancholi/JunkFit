import React, { Fragment, useState } from "react";
import Fit from "./Fit";
import './WorkLib.css';
import {ex} from "./ex";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { set } from "react-hook-form";
function WorkLib()
{
    const [modal,setmodal]=useState(false)
     const handleModal=()=>{
         setmodal(!modal)
     }
     const[chest,setChest]=useState(false);
     const[arms,setArms]=useState(false);
     const[Leg,setLegs]=useState(false);
     const[back,SetBack]=useState(false);
     const[h,setHeight]=useState(3000);
     const [all,setAll]=useState(ex)
     const handleChest=()=>{
         setAll(ex.filter((items)=>items.type==="Chest"))
         setHeight(800)
     }
     const handleArm=()=>{
        setAll(ex.filter((items)=>items.type==="Arms"))
        setHeight(800)
     }
     const handleAbs=()=>{
        setAll(ex.filter((items)=>items.type==="Abs"))
        setHeight(800)
     }
     const handleLegs=()=>{
        setAll(ex.filter((items)=>items.type==="Legs"))
        setHeight(800)
     }
     const handleBack=()=>{
        setAll(ex.filter((items)=>items.type==="Back"||items.type==="Shoulder"))
        setHeight(1200)
     }
     const handleAll=()=>{
         setAll(ex)
         setHeight(3000)
     }

     const work=all.map((ex)=><Fit video={ex.video}  sets={ex.sets}  dur={ex.dur}  reps={ex.reps } cal={ex.cal} name={ex.name} type={ex.type} onClick={handleModal} gif={ex.gif}/>)
    return(
        <Fragment>
           {modal && <Modal msg={`You burned ${ex[0].cal} calories`} onClick={handleModal}></Modal>}
        <div id="AllEx" style={{height:h}}>
         
          <h2 className="rec">Recomended Excercises</h2>
          <section id="workCat">
                <button className="order" onClick={handleAll}>All-Workouts</button>
                <button className="order" onClick={handleChest}>Chest and Traps</button>
                <button className="order" onClick={handleBack}>Back and Shoulders</button>
                <button className="order" onClick={handleLegs}>Legs and Calves</button>
                <button className="order" onClick={handleArm} >Bicep and Tricep</button>
                <button className="order" onClick={handleAbs}>Abs and Cardio</button>
                </section>
          <section id="section">
          {work}
          </section>
    
           <div><Link to={"/workout/create"}><button className="order" >Create Personal Workout Schedule</button></Link></div>
        </div>
        </Fragment>
    )
}
export default WorkLib;