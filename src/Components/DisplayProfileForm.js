
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { useAuth } from "../AuthContext/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import Carts from "./context";
import "./DisplayProf.css"
function DisplayProfileForm() {
  const ctx = useContext(Carts)
  const [AgeGrp, setAgeGrp] = useState();
  const [address, setAddress] = useState();
  const [cal, setCal] = useState();
  const [district, setDistrict] = useState();
  const [goalWeight, setGoalWeight] = useState();
  const [height, setHeight] = useState();
  const [perDaydef, setPerDayDef] = useState();
  const [weight, setWeight] = useState();
  const [goalP, setGoal] = useState();


  const [tp, setTp] = useState(false);
  const [tp1, setTp1] = useState(false);
  const [tp2, setTp2] = useState(false);
  const [tp3, setTp3] = useState(false);
  const [tp4, setTp4] = useState(false);
  const {currentUser} = useAuth();
  console.log(currentUser)

  const testHandler = () => {
    setTp(true);
  };
  const testHandler1 = () => {
    setTp1(true);
  };
  const testHandler2 = () => {
    setTp2(true);
  };
  const testHandler3 = () => {
    setTp3(true);
  };
  const testHandler4 = () => {
    setTp4(true);
  };
   let dcal=ctx.defeceitCal
  const profileUpdateHandler = async (e) => {
    e.preventDefault();
    if (tp1 == true || tp == true) {
     
      if (weight - goalWeight >= 0)
        dcal=AgeGrp - (weight - goalWeight) * perDaydef

      else
        dcal=(AgeGrp + (goalWeight - weight) * perDaydef)
    }
    ctx.AddCal(dcal-ctx.defeceitCal)
    

    console.log(ctx.defeceitCal)

    db.collection("JunkFit").doc(currentUser.uid).set({
      height: height,
      weight: weight,
      goalWeight: goalWeight,
      cal: dcal,
      address: address,
      district: district,
      AgeGrp: AgeGrp,
      perDaydef: perDaydef,
      uid: currentUser.uid,
    }).then(() => {
      ctx.updateLoc(district)
      setTp(false)
      setTp1(false)
      setTp2(false)
      setTp3(false)
      setTp4(false)



    })
  }

  const handleH = (e) => {
    setHeight(e.target.value)
  }

  const handleW = (e) => {
    setWeight(e.target.value)
  }
  const handleGw = (e) => {
    setGoalWeight(e.target.value)
  }
  useEffect(() => {
    db.collection("JunkFit")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id == currentUser.uid) {
            let tp = doc.data();

            setAgeGrp(tp.AgeGrp)
            setAddress(tp.address);
            setHeight(tp.height);
            setDistrict(tp.district);
            setGoalWeight(tp.goalWeight);
            setWeight(tp.weight);
            setPerDayDef(tp.perDaydef);
            setCal(tp.cal)
            ctx.AddCal(tp.cal-ctx.defeceitCal)
            

          }
        });
      });
  }, [])

  return (
    <div className="outercontainer-profile">
      <div className="profile-form">
        <div className="profile-heading">
          <h2>Profile</h2>
        </div>
        <h3>Calories required in your Age Group</h3>
        <div className="profile-details">{AgeGrp + " " + "cal"}</div>
        <div className="profile-details"></div>
        <div className="profile-details">
          <h3><label>Height (in cm)</label></h3>
          <div>{height}</div>
          <button id="but" onClick={testHandler4}>Edit</button>
          {tp4 && <input type="number" value={height} onChange={handleH} required></input>}
        </div>
        <div className="profile-details">
          <h3><label>Weight(in kgs)</label></h3>
          <div>{weight}</div>
          <button id="but" onClick={testHandler}>Edit</button>
          {tp && (
            <input
              type="number"
              onChange={handleW}
              required
            ></input>
          )}

        </div>
        <div className="profile-details">
          <h3><label>Weight Goal (In kgs)</label></h3>
          <div>{goalWeight}</div>
          <button id="but" onClick={testHandler1}>Edit</button>
          {tp1 && <input
            type="number"

            onChange={handleGw}
            required
          ></input>}
          <h3><label>Delivery Address</label></h3>
          <div>{address}</div>
          <button id="but" onClick={testHandler2}>Edit</button>
          {tp2 && <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          ></input>}
          <h3><label>District(eg: Borivali,Kandiwali,Malad)</label></h3>
          <div>{district}</div>
          <button id="but" onClick={testHandler3}>Edit</button>
          {tp3 && <input
            type="text"
            required
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
            value={district}
          ></input>}
        </div>
        <div className="BMI">{(ctx.defeceitCal > 0) ? `Cal consumption per day left :${ctx.defeceitCal}` : `Excess cal consumed :${-ctx.defeceitCal}`}</div>
        <div className="profile-submit">
          <button type="submit" className="but" onClick={profileUpdateHandler}>
            Update Profile
          </button>
        </div>
        <div>
          <Link to="/" className="profile-submit">
            {" "}
            Proceed to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DisplayProfileForm;
