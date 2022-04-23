import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, query, where ,getDocs} from "firebase/firestore";
import "./ProfileForm.css";
import { db } from "../firebase";
import Carts from "./context";
import { Link } from "react-router-dom";

function ProfileForm() {
 /*const calTrack=async()=>{
    const q = query(collection(db, "JunkFit"), where("cal", "==", 500));
    return await getDocs(q).docs;
 }*/

// const [cal, setCal] = useState(0);
  const [height, setHeight] = useState(1);
  const [weight, setWeight] = useState(1);
  const [goalWeight, setGoalWeight] = useState(1);
  const[add,setAdd]=useState("")
  const[loc,setLoc]=useState("");
  const[age,setAge]=useState(0);
  const[day,setDay]=useState(0);
  const ctx=useContext(Carts)
  const[link ,setLink]=useState("/")
  function profileSubmitHandler(e) {
  

    e.preventDefault();
    db.collection("JunkFit")

      .add({
        height: height,
        weight: weight,
        goalWeight: goalWeight,
        cal:ctx.defeceitCal,
        address:add,
        district:loc,
        AgeGrp:age,
        perDaydef:day
      })
      .then(() => {
        if(loc==="" || add=="" || height===1 || weight===1 || goalWeight===1 || age===0 ||  day===0)
        {
          alert("Fill entire details to set profile")
        
        }
        else
        {
        alert("Profile updated successfully");
        ctx.AddCal(-ctx.defeceitCal);
        ctx.AddCal(age-(weight-goalWeight)*day)
       }
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
  const handleAge=(e)=>{
        if(e.target.value=="Child")
        setAge(2000);
        else if(e.target.value=="Adult")
        setAge(2500);
        else
        setAge(1800);

  }
  const handlePeriod=(e)=>{
    if(e.target.value=="year")
    setDay(22);
    else if(e.target.value=="3month")
    setDay(90);
    else
    setDay(45);

}
useEffect(()=>{
if(loc==="" || add=="" || height===1 || weight===1 || goalWeight===1 || age===0 ||  day===0)
{
  setLink("/Profile")

}
else
{
  setLink("/")
}
},[loc,add,height,weight,goalWeight,age,day])


  return (
    <div className="outercontainer-profile">
      <div className="profile-form">
        <div className="profile-heading">
          <h2>Profile</h2>
        </div>
        
          <h3>Age Group</h3>
          <div className="profile-details">
            <span>
          <input
            type="radio"
            name="Ag"
            value="Child"
            onChange={handleAge}
            required />
            <label htmlFor="A">Child (5-17)</label></span>
           <span>
          <input
            type="radio"
            name="Ag"
            value="Adult"
            onChange={handleAge} 
            required
          ></input><label htmlFor="A">Adult (18-40)</label></span>
           <span>
          <input
            type="radio"
            name="Ag"
            value="Old"
            onChange={handleAge} 
            required
          ></input><label htmlFor="A">Old (40-55)</label></span>
          
        </div>
        <h3>Goal period</h3>
          <div className="profile-details">
            <span>
          <input
            type="radio"
            name="P"
            value="year"
            onChange={handlePeriod} 
            required

          ></input><label htmlFor="A">A Year</label></span>
           <span>
          <input
            type="radio"
            name="P"
            value="6month"
            onChange={handlePeriod} 
            required
          ></input><label htmlFor="A">6 Month</label></span>
           <span>
          <input
            type="radio"
            name="P"
            value="3month"
            onChange={handlePeriod} 
            required
          ></input><label htmlFor="P">3 Month</label></span>
          
        </div>
        <div className="profile-details">
          <label>Height (in cm)</label>
          <input
            type="number"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            value={height} 
            required
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
            required
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
            required
          ></input>
          <label>Delivery Address </label>
          <input
            type="text"
            onChange={(e) => {
             setAdd(e.target.value)
          
            }}
            value={add} 
            required
          ></input>
          <label>District (eg: Borivali,Kandiwali,Malad)</label>
          <input
            type="text"
            onChange={(e) => {
              setLoc(e.target.value);
            
            }}
            value={loc} 
            required
          ></input>
        </div>
        <div className="BMI">{(ctx.defeceitCal>0)?`Cal consumption per day left :${ctx.defeceitCal}`:`Excess cal consumed :${-ctx.defeceitCal}`}</div>
        <div className="profile-submit">
          <button type="submit" onClick={profileSubmitHandler}>
            Set Profile
          </button>
          </div>
          <div>
          <Link to={link} className="profile-submit" > Proceed to Homepage
         </Link>
    
          </div>
         
      </div>
    </div>
  );
}

export default ProfileForm;