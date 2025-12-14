import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Loginpopup from './components/Loginpopup';

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <div className='app'>
      {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
      <Navbar setshowlogin = {setshowlogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='order' element={<Placeorder/>}/>
      </Routes>
    </div>
  )
}

export default App