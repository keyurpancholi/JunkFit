import React, { createFactory, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Order from './Pages/Order';
import Workout from './Pages/Workout';
import MyWorkout from './Pages/MyWorkout';
import Cart from './Components/Cart';
import Carts from './Components/context';
import OrderSummary from './Pages/OrderSummary';
function App() {
  const ctx=useContext(Carts)
  const [food,setFood]=useState(ctx.foodItem)
  const [Myorder,setorder]=useState(ctx.OrderItem)
  const [cal,SetCal]=useState(500)
  
  return (
    <Carts.Provider value={ {
      foodItem :food,
      OrderItem:Myorder,
      defeceitCal:cal,
      RemoveCal:(calories)=>SetCal((prevState)=>prevState-calories),
      AddCal:(calories)=>SetCal((prevState)=>prevState+calories)
      ,
     
     AddFood:(index,Name,Price,Calorie,Quantity,image)=>
   {   
     
        let item={
          id :index,
          name:Name,
          price:Price,
          calories: Calorie,
          quantity:Quantity,
          img :image
        
        }
        
      
            setFood((prevState)=>{
              let count=0;
             for(let states of prevState)
             {
               if(states.id===item.id)
                 count=count+1

             }
             if(count===0)
             {
                return(
                  [...prevState,item]
                )
             }
             else{
               return ([...prevState])
             }
            })

      
   },
   AddOrder:(Id,Name,Loc,Price,Calorie,Hotel,foodimg)=>
   {   
     
        let order={
          id:Id,
          name:Name,
          loc:Loc,
          price:Price,
          calories: Calorie,
          hotel:Hotel,
          foodImg:foodimg
          
        
        }
        
          setorder((prevState)=>{
               
               return ([...prevState,order])
             })
            
            
      
   },

   RemoveFood:(id)=>
   {
     setFood((prevState)=>prevState.filter((item)=>item.id!==id))
   },
   RemoveOrder:(id)=>
   {
     setorder((prevState)=>prevState.filter((item)=>item.id!==id))
   }
  
  }}>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/orders" element={<Order></Order>}></Route>
        <Route path="/workout" element={<Workout></Workout>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
        <Route path="/workout/create" element={<MyWorkout></MyWorkout>}></Route>
        <Route path="/Cart/Summary" element={<OrderSummary></OrderSummary>}></Route>
        
      </Routes>
    </BrowserRouter>
    </Carts.Provider>
   
  )
}

export default App;
