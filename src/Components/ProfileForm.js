import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, query, where ,getDocs} from "firebase/firestore";
import "./ProfileForm.css";
import { db } from "../firebase";
import Carts from "./context";

function ProfileForm() {
 /*const calTrack=async()=>{
    const q = query(collection(db, "JunkFit"), where("cal", "==", 500));
    return await getDocs(q).docs;
 }*/

// const [cal, setCal] = useState(0);
  const [height, setHeight] = useState(1);
  const [weight, setWeight] = useState(1);
  const [goalWeight, setGoalWeight] = useState(1);
  const ctx=useContext(Carts)
  
  function profileSubmitHandler(e) {
    e.preventDefault();
    db.collection("JunkFit")

      .add({
        height: height,
        weight: weight,
        goalWeight: goalWeight,
        cal:ctx.defeceitCal
      })
      .then(() => {
        alert("Profile updated successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  /*let arr=[]
  async function getCal(){
     setCal(await calTrack().cal);
     console.log(cal);
  }

  useEffect(async() => {
      getCal();
  }, [])*/
  

  return (
    <div className="outercontainer-profile">
      <div className="profile-form">
        <div className="profile-heading">
          <h2>Profile</h2>
        </div>
        <div className="profile-details">
          <label>Height (in cm)</label>
          <input
            type="number"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            value={height}
          ></input>
        </div>
        <div className="profile-details">
          <label>Weight (in kgs)</label>
          <input
            type="number"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            value={weight}
          ></input>
        </div>
        <div className="profile-details">
          <label>Weight goal (in kgs)</label>
          <input
            type="number"
            onChange={(e) => {
              setGoalWeight(e.target.value);
            }}
            value={goalWeight}
          ></input>
        </div>
        <div className="BMI">{(ctx.defeceitCal>0)?`Defeceit cal :${ctx.defeceitCal}`:`Excess cal :${-ctx.defeceitCal}`}</div>
        <div className="profile-submit">
          <button type="submit" onClick={profileSubmitHandler}>
            Set Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;