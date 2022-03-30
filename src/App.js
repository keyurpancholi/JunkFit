import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Order from './Pages/Order';
import Workout from './Pages/Workout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/orders" element={<Order></Order>}></Route>
        <Route path="/workout" element={<Workout></Workout>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
