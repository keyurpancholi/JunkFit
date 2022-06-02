import React, { Fragment, useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CartItem from "./CartItem";
import Carts from "./context";
import Modal from "./Modal";
import OrderModal from "./OrderModal";
import './Cart.css'
import { useAuth } from "../AuthContext/AuthContext";
import { db } from "../firebase";

function Cart() {
    const ctx = useContext(Carts)
    const [MyModal, setModal] = useState(false);
    const [showPlace, setshowPlace] = useState(false);
    const [cal, setCal] = useState(0);
    const {currentUser} = useAuth()
    const handleDel = (id) => {
        ctx.RemoveFood(id)
    }
    const handleSee = () => {
        setshowPlace(!showPlace)
    }
    const handleModal = () => {
        setModal(!MyModal)
    }

    const CurrQ = (id, q) => {
        for (let items of ctx.foodItem) {
            if (items.id === id)
                items.quantity = q;
        }
    }
    let AllItems = ctx.foodItem.map((item) => <CartItem name={item.name} image={item.img}
        quantity={item.quantity} price={item.price} calories={item.calories} id={item.id} hotel={item.hotel} loc={item.loc} onDelete={handleDel} onClick={handleModal} onPlace={CurrQ} ></CartItem>)
    const handlePlace = () => {
        let count = ctx.orderId + 1;
        for (let food of ctx.foodItem) { //(Id,Name,Loc,Price,Calorie,Hotel,foodimg,quantity)
            console.log(food.quantity)

            ctx.AddOrder(food.id, food.name, food.loc, food.price * food.quantity, food.calories * food.quantity, food.hotel, food.img, food.quantity, "new", count);
            count = count + 1;
            console.log(count)
            ctx.upgrade(count);


        }
        setshowPlace(!showPlace);


    }

    const order = <OrderModal cal={cal} onClose={handleSee}></OrderModal>

    useEffect(() => {
        let dcal = ctx.defeceitCal
        for (let item of ctx.OrderItem) {
            if (item.type === "new"){
                dcal -= item.calories
                ctx.RemoveCal(item.calories);
            }
        }
        
        // SAVE HERE ctx.defeceitCal
        console.log('Attempting Save: '+dcal)
        db.collection("JunkFit").doc(currentUser.uid).update({
            cal: dcal
        }).then(() => {
            console.log('Saved')
        })
        
        setCal((prevState) => {
            let newState = prevState
            for (let item of ctx.OrderItem) {
                if (item.type === "new")
                    newState = newState + item.calories;


            }
            return newState;
        })

    },

        [ctx.OrderItem])




    return (
        <Fragment>
            {MyModal && <Modal msg="Removed From Cart" onClick={handleModal} />}
            {showPlace && order}
            <Nav></Nav>
            <h2 className="rec">My Cart Items</h2>
            <div id="CartSec" >

                {AllItems}
            </div>
            <div id="place">
                {ctx.foodItem.length > 0 && <button className="order" onClick={handlePlace}>Place All My Orders</button>}
            </div>
            <Footer></Footer>
        </Fragment>
    )
}
export default Cart;