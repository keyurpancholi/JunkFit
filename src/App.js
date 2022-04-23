import React, { createFactory, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Order from './Pages/Order';
import Workout from './Pages/Workout';
import MyWorkout from './Pages/MyWorkout';
import Cart from './Components/Cart';
import Carts from './Components/context';
import OrderSummary from './Pages/OrderSummary';
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Hotels from './Pages/Hotels';
import FoodContent from './Components/FoodContent';
import { AuthProvider } from './AuthContext/AuthContext';

function App() {
  const ctx=useContext(Carts)
  const [food,setFood]=useState(ctx.foodItem)
  const [Myorder,setorder]=useState(ctx.OrderItem)
  const [cal,SetCal]=useState(0)
  const [id,setId]=useState(0);
   const [Item,setItem]=useState(FoodContent)
  return (
    <AuthProvider>
    <Carts.Provider value={ {
      updateItem:(Category)=>{
           setItem((prevState)=>prevState.filter((items)=>items.cat=== Category))
      },
      Reset:()=>{
        setItem(FoodContent);
      },
      MyVar:Item,
      foodItem :food,
      OrderItem:Myorder,
      defeceitCal:cal,
      orderId:id,
      upgrade:(count)=>setId(count),
      RemoveCal:(calories)=>SetCal((prevState)=>prevState-calories),
      AddCal:(calories)=>SetCal((prevState)=>prevState+calories)
,
     
     AddFood:(index,hotel,loc,Name,Price,Calorie,image,quantity)=>
   {   
     
        let item={
          id :index,
          name:Name,
          price:Price,
          calories: Calorie,
          img :image,
          hotel:hotel,
          loc:loc,
          quantity:quantity
        
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
   AddOrder:(Id,Name,Loc,Price,Calorie,Hotel,foodimg,quantity,type,oid)=>
   {   
     
        let order={
          id:Id,
          name:Name,
          loc:Loc,
          price:Price,
          calories: Calorie,
          hotel:Hotel,
          foodImg:foodimg,
          quantity:quantity,
          type:type,
          orderId:oid
        
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
     setorder((prevState)=>prevState.filter((item)=>item.orderId!==id))
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
        <Route path="/orders/Hotels" element={<Hotels></Hotels>}></Route>
        <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
    </Carts.Provider>
    </AuthProvider>
   
  )
}

export default App;
