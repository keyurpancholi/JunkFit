
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import './Main.css';
import Button from "./Buttons";



function Main() {
    const images = ["url(https://images.hdqwalls.com/download/girl-fitness-model-pic-1920x1080.jpg)",
        "url(https://s1.1zoom.me/b5854/791/Bodybuilding_Men_511666_1600x1200.jpg)",
        "url(https://www.healthdigest.com/img/gallery/the-difference-between-counting-calories-and-counting-macros/l-intro-1600781745.jpg)",
        "url(https://c8.alamy.com/comp/2C2D1M4/balanced-diet-concept-2C2D1M4.jpg)",
        "url(https://thumbs.dreamstime.com/z/healthy-food-diet-concept-restaurant-dish-delivery-take-away-fitness-meal-weight-loss-nutrition-foil-boxes-steamed-veal-83457721.jpg)",
        "url(https://thumbs.dreamstime.com/z/worker-wearing-gloves-food-delivery-service-closeup-unrecognizable-protective-packaging-orders-wooden-table-copy-space-193062520.jpg)"]


    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((currentCount) => (currentCount + 1) % 6)
        }, 3000)

        return () => {
            console.log('Clearing interval')
            clearInterval(intervalId)
        }
    }, [])

    return (
        <section id="id" style={{ backgroundImage: images[count], transition: "500ms" }}>
            <div id="content">
                <h1>
                    JunkFit
                </h1>
                <span>The Modern Solution to Stay Healthy, Happy and Fit</span>
                <Button text1="Order Now" text2="Workout" />

            </div>




        </section>
    )
}

export default Main;

