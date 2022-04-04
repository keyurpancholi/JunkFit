import React,{useState} from "react";
import './Food.css'
import Card from "./Card";
import hotel from "./Food_array";
function Food()
    {
       
    const [isfood,setFood]=useState(hotel)
    const [isheight,setHeight]=useState(4000)
    const[visible,setVisible]=useState(false)
    const [filter,setFilter]=useState(false)
    const [Rice,setRice]=useState(false)
    const [Itly,setItly]=useState(false)
    const [ff,setFf]=useState(false)
    const [drink,setdrink]=useState(false)
    const [Ni,setNi]=useState(false)

    const all=()=>
    { 
        setFood(hotel)
        setHeight(4000)
        setFilter(false)
    }
      const sortbycal=()=>

      { hotel.sort((a,b)=>a.Calorie-b.Calorie)
          if(filter!==true)
        {
        
        setFood(hotel)
        }
        else
        {   if(ff===true)
            setFood( hotel.filter((food)=>food.cat==="Fast-Food"))
            else if(Rice===true)
            setFood( hotel.filter((food)=>food.cat==="Rice"))
            else if(drink===true)
            setFood( hotel.filter((food)=>food.cat==="Drinks"))
            else if(Itly===true)
            setFood( hotel.filter((food)=>food.cat==="Italian"))
            else
            setFood( hotel.filter((food)=>food.cat==="North-Indian"))

        }
        setVisible(!visible)
      }
      const sortByPro=(item)=>

      { 
        hotel.sort((a,b)=>b.Protein-a.Protein)
          if(filter!==true)
        {
         setFood(hotel)
        }
        else
        {
            if(ff===true)
            setFood( hotel.filter((food)=>food.cat==="Fast-Food"))
            else if(Rice===true)
            setFood( hotel.filter((food)=>food.cat==="Rice"))
            else if(drink===true)
            setFood( hotel.filter((food)=>food.cat==="Drinks"))
            else if(Itly===true)
            setFood( hotel.filter((food)=>food.cat==="Italian"))
            else
            setFood( hotel.filter((food)=>food.cat==="North-Indian"))

        }
        setVisible(!visible)
      }
        const fastFood=()=>
        {    
            setFilter(true)
            setFf(true)
            setFood( hotel.filter((food)=>food.cat==="Fast-Food"))
            setHeight(1000)
            setRice(false)
            setNi(false)
            setItly(false)
            setdrink(false)
             
        }
        const rice=()=>
        {   setFilter(true)
            setRice(true)
             setFood(hotel.filter((food)=>food.cat==="Rice"))
             setHeight(1000)
             setFf(false)
             setNi(false)
             setItly(false)
             setdrink(false)
             
        }
        const north=()=>
        {    setFilter(true)
            setNi(true)
             setFood(hotel.filter((food)=>food.cat==="North-Indian"))
             setHeight(1000)
             setRice(false)
             setFf(false)
             setItly(false)
             setdrink(false)
             
        }
        const drinks=()=>
        {    setFilter(true)
            setdrink(true)
             setFood(hotel.filter((food)=>food.cat==="Drinks"))
             setHeight(1000)
             setRice(false)
             setNi(false)
             setItly(false)
             setFf(false)
             
        }
        const Italian=()=>
        {    setFilter(true)
            setItly(true)
             setFood(hotel.filter((food)=>food.cat==="Italian"))
             setHeight(1000)
             setRice(false)
             setNi(false)
             setFf(false)
             setdrink(false)
             
        }
        const handleOptions=()=>
        {
             setVisible(true)
        }
        const food= isfood.map(hotels=> <Card  img={hotels.img} name={hotels.name} type={hotels.type } Carbs={hotels.Carbs} Protein={hotels.Protein}
            Fats={hotels.Fats} Calorie={hotels.Calorie} Quantity={hotels.quantity}/>)
            if(visible===false)
        {
        return(
            <section id="menu" style={{height:isheight}}>
                
              <h1 className="rec">Recommended Food-Items for you</h1>
              
              <div id="cat">
              <button className="order" onClick={all}>All-Items</button>
                  <button className="order" onClick={fastFood}>Fast-Food</button>
                <button className="order"  onClick={north}>North Indian</button>
                <button className="order" onClick={rice}>Rice-Items</button>
                <button className="order" onClick={Italian}>Italian</button>
                <button className="order" onClick={drinks}>Drinks</button>
                
                <button className="order" onClick={handleOptions}>Sort-Items</button>
    

                 
                </div>
              <section id="food">
               {food} 
                
              </section>

            </section>
          
        )
        }
        else
        {
        return(
            <section id="menu" style={{height:isheight}}>
                
              <h1 className="rec">Recommended Food-Items for you</h1>
              
              <div id="cat">
              <button className="order" onClick={all}>All-Items</button>
                  <button className="order" onClick={fastFood}>Fast-Food</button>
                <button className="order"  onClick={north}>North Indian</button>
                <button className="order" onClick={rice}>Rice-Items</button>
                <button className="order" onClick={Italian}>Italian</button>
                <button className="order" onClick={drinks}>Drinks</button>
                
                <button className="order" onClick={handleOptions}>Sort-Items</button>
                <span>
                <ul>
                     <li onClick={sortbycal}>
                         By Calories
                     </li>
                     <li onClick={sortByPro}>
                         By Protein
                     </li>
                 </ul>
                </span>
                 

                 
                </div>
              <section id="food">
               {food} 
                
              </section>

            </section>
        )

    }
}


export default Food;