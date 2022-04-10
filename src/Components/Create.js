import React ,{Fragment, useContext, useState}from "react";
import {useForm } from "react-hook-form";
import './Create.css'
import Routine from "./Routine";
import Modal from "./Modal";
import { ex } from "./ex";
import Carts from "./context";
function Create()
{   const ctx=useContext(Carts);
    const {register ,handleSubmit}=useForm();
    const [routineData, setRoutineData] = useState({})
    const [modal,setmodal]=useState(false)
    const handleModal=()=>{
        setmodal(!modal)
    }
  const burn=<div id="burn">You need to burn {-ctx.defeceitCal} calories</div>
    const Submit=(data)=>{
    
       setRoutineData((prev) => {

           let newState =  {...prev, [data.day]: data}
           return newState
       })

    };

  return(
      <Fragment>
    {modal && <Modal msg={`You burned ${ex[0].cal} calories`} onClick={handleModal}></Modal>}
      <section id="Form">
          <h1 className="rec">Create My WorkOut</h1>
           <div>
               {ctx.defeceitCal<0 && burn}

           <form  id="Myform"  onSubmit={handleSubmit(Submit)}>
               <span>
               <input type="checkbox"  name="chest" id="chest"  className="select" {...register('chest')} />
               <label for="chest"  className="input">Chest</label>
               </span>
            <span>
            <input type="checkbox" name="arms" id="arm"  className="select" {...register('arms')}/>
            <label for="arms" className="input">Bicep And Tricep</label>
            </span>
           <span>
           <input type="checkbox" name="legs" id="leg"  className="select"  {...register('legs')} />
           <label for="legs" className="input">Legs</label>
           </span>
           <span>
           <input type="checkbox" name="abs" id="ab"  className="select"  {...register('abs')} />
           <label for="abs" className="input">Abs and Cardio</label>
          
           </span>
           <span>
           <input type="checkbox" name="back" id="sab"  className="select"  {...register('back')}/>
           <label for="back" className="input">Shoulders and Back</label>
           </span>
           <label for="day" id="day" className="input">Select A Day</label>
           <span>
           <select name="day"  className="Day" required  {...register('day')}>
               <option value="Monday"> Monday</option>
               <option value="Tuesday"> Tuesday</option>
               <option value="Wednesday"> Wednesday</option>
               <option value="Thursday">Thursday</option>
               <option value="Friday"> Friday</option>
               <option value="Saturday"> Saturday</option>
               <option value="Sunday"> Sunday</option>
           </select>
           </span>
           <button className="order" type="sumbit" >Add WorkOut</button>

           </form>
          
           </div>
           {Object.keys(routineData).map(key => {
               const {day, chest, back, abs, legs, arms} = routineData[key]
               return <Routine onClick ={handleModal} day={day} chest={chest} back={back} abs={abs} legs={legs} arms={arms} />
           })}

      </section>
      </Fragment>
  )
}
export default Create;