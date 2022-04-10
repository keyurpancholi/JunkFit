import React, { createContext, Fragment, useContext, useState } from "react";
import ReactDOM from "react-dom";
import Modal, { BackDrop } from "./Modal";
import ReactCardFlip from "react-card-flip";
import './PlaceOrder.css';
import OrderComing from "./OrderComing";
import DosaContent from "./DosaContent";
import Carts from "./context";

const PlaceOrder=(props)=> {
    const context=useContext(Carts)

    const[visible,setVisible]=useState(false);
    const handleHotel=()=>{
        
        props.onPlace();
        context.RemoveCal(props.totalQuan);
        context.AddOrder(props.id,props.foodname,props.loc,props.price*props.quan,props.totalQuan,props.name,props.foodimg);
    }    
    const HandleFlip=()=>{
        setVisible(!visible)
    }
    const front= <section id="FrontSec" style={{ background: `url(${props.img})`  }}>
    <div id="HotelPlace">
        <span id="loc">{props.loc}</span>
        <span id="Place">{props.name}</span>
    </div>
    <div id="flip"><button className="hotel" onClick={handleHotel}>Place Order</button>
        <button className="hotel" onClick={props.onClick}>Close</button>
        <button className="hotel" onClick={HandleFlip}>ReadMore</button></div>

        </section>
        const back= <section id="backSec" >
        <h3>{`${props.foodname} Information`}</h3>
        <ul>
            <li><span className="info">Ingredients</span>Quantity And Calories</li>
            <li><span className="info">Rice</span>{props.quantityR+", "+ props.calR}</li>
            <li><span className="info">Urad-Dal</span>{props.quantityU+", "+props.calU}</li>
            <li><span className="info">Oil/Ghee</span>{props.quantityO+", "+props.calO}</li>
            <li><span className="info"> Calorie per serving</span>{(props.calR+props.calU+props.calO)}</li>
            <li><span className="info">Total Calories</span>{props.totalQuan}</li>
         



        </ul>
        <button className="hotel" id="backTo" onClick={HandleFlip}>Back</button>
    </section>
    return (
       <Fragment>
           {(!visible)&& front}
           {(visible)&& back}
               
         

            </Fragment>


    )
}
const HotelModal=(props)=>{
    const dailyDef=500;
    const[MyOrder,setOrder]=useState(false)
    const handleModal=()=>{
        setOrder(!MyOrder)
    }
    const Place=<OrderComing cal={props.totalquan} onClose={props.onClick} id={props.id}></OrderComing>
    const Hotel=<PlaceOrder onClick={props.onClick} img={DosaContent[0].img} loc={DosaContent[0].loc} name={DosaContent[0].name} quantityR={DosaContent[0].Rice.quantity}
    calR={DosaContent[0].Rice.cal} quantityU={DosaContent[0].UradDal.quantity} calU={DosaContent[0].UradDal.cal} id={props.id}
     quantityO={DosaContent[0].oil.quantity} calO={DosaContent[0].oil.cal} foodname={props.foodName} rat={DosaContent[0].rat}  totalQuan={props.totalquan} onPlace={handleModal} price={props.price} quan={props.quan}
     foodimg={props.img}/>
   return(
    <Fragment>

        {ReactDOM.createPortal(<BackDrop></BackDrop>,document.getElementById("overlay"))}
   {ReactDOM.createPortal( (MyOrder)?Place:Hotel, document.getElementById("modal"))}
    </Fragment>
   )

}

export default HotelModal;