import React, { Fragment, useContext, useState } from "react";
import './HotelContent.css'
import NutritionModal from "./NutritionModal";
import Carts from "./context";
import { auth, db } from "../firebase";
import HotelModal from "./PlaceOrder";
import Modal from "./Modal";
const HotelContent=(props)=>{
    const ctx=useContext(Carts)
    const [hotel,setHotel]=useState(false);
    const [modal,setmodal]=useState(false)
    const[Nut,setNut]=useState(false);
    //index,hotel,loc,Name,Price,Calorie,image
    const handleCart=()=>{
        if(auth.currentUser)
        {
         ctx.AddFood(props.id,props.name,props.loc,props.foodName,props.price,props.cal,props.foodimg,props.quantity);
         props.onClick();
         
        }
        else
        {
            setmodal(!modal)
            
        }
    }
    const handleDisp=()=>{
       setHotel(!hotel)
    }
    const images= <HotelModal img={props.img} name={props.name} loc={props.loc} onClick={handleDisp}></HotelModal>
    const handleInfo=()=>{
        setNut(!Nut)
    }
    const nut=  <NutritionModal  name={props.name}  ig={props.Ingredients} onClick={handleInfo}></  NutritionModal>
    return(
        <Fragment>
            {modal && <Modal msg="Login/Sign-Up First" onClick={handleCart}></Modal>}
            {hotel && images}
            {Nut && nut}

        <section id="MyRec">
        <div id= "image"><img src={props.foodimg}></img></div>
        <div id="MyRes">
            <h1 id="itemName">{props.foodName}</h1>
            <ul id="LocDetails">
                <li><span>Restauarant</span>{props.name}</li>
                <li><span>Location</span>{props.loc}</li>
                <li><span>Item price</span>{props.price}</li>
                {auth.currentUser?<li><span>Expected Delivery time</span>{(props.LID)*9+10<=60?(props.LID)*9+10+"mins":Math.floor(((props.LID)*9+10)/60 )+"hr"+" "+((props.LID)*9+10)%60+"mins"}</li>
                :<li><span>Expected Delivery time :</span> Unknown</li>}
                
            </ul>
            <div id="AllBut">
            <button className="order" onClick={handleCart}>Add to Cart</button>
            <button className="order" onClick={handleDisp}>Check Hotel Images </button>
            <button className="order" onClick={handleInfo}>Check Nutrional Info</button>
            </div>
       
        </div>
        </section>
        </Fragment>
        
        
    )

}
export default HotelContent;