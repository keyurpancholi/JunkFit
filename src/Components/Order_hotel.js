import React, { useState } from "react";
import './Order_hotel.css'
import DosaContent from "./DosaContent";
import PlaceOrder from "./PlaceOrder";

function Order_hotel(){


  return(
      <div id="places">
        <h1 className="rec">Restaurants Conected To Us</h1>
        <section id="AllHotels">
          <div className="ForBack">
        <img src="https://icon-library.com/images/reverse-icon-png/reverse-icon-png-3.jpg"></img>
          </div>
          <div id="MyPlace">
          <PlaceOrder img={DosaContent[0].img} quantityR={DosaContent[0].total} calR={DosaContent[0].Rice.cal} quantityU={DosaContent[0].UradDal.quantity} calU={DosaContent[0].UradDal.cal} 
          quantityO={DosaContent[0].oil.quantity} calO={DosaContent[0].oil.cal} name={DosaContent[0].name} loc={DosaContent[0].loc} rat={DosaContent[0].rat}/>
          </div>
          <div className="ForBack">
         <img src="https://media.istockphoto.com/vectors/play-button-vector-id1192173219?k=20&m=1192173219&s=612x612&w=0&h=D8QzOI5EbP2bexOa9kg4ttKOwez1KxVplW39ckN29sI="></img>
          </div>
        </section>
      
      </div>
  )
}

export default Order_hotel;