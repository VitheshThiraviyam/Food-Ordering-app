import React from 'react'
import Navbar from './components/Navbar'
import Slidebar from './components/Slidebar'
import { Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Orders from './pages/Orders';
import Add from './pages/Add';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Slidebar/>
        <Routes>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App