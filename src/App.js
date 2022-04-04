

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Order from './Pages/Order';
import Workout from './Pages/Workout';
import HotelPage from './Pages/HotelPage';
import MyWorkout from './Pages/MyWorkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/orders" element={<Order></Order>}></Route>
        <Route path="/workout" element={<Workout></Workout>}></Route>
        <Route path="/orders/hotelS" element={<HotelPage></HotelPage>}></Route>
        <Route path="/workout/create" element={<MyWorkout></MyWorkout>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
