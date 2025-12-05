import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menus, Setmenus] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='nav-logo' />
        <ul>
          <li onClick={()=>Setmenus("home")}className={menus==="home"?"active":""}>Home</li>
          <li onClick={()=>Setmenus("menu")}className={menus==="menu"?"active":""}>menu</li>
          <li onClick={()=>Setmenus("mobile-app")}className={menus==="mobile-app"?"active":""}>mobile-app</li>
          <li onClick={()=>Setmenus("contact-us")}className={menus==="contact-us"?"active":""}>contact-us</li>
        </ul>
        <div className='nav-right'>
          <img src={assets.search_icon} alt='' className='nav-search-icon' />
          <div className='nav-search-icon'>
            <img src={assets.basket_icon} alt='' />
            <div className='dot'></div>
          </div>
          <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar