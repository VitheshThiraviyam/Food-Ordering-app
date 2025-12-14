import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../assets/assets';
import {Link} from 'react-router-dom';
const Navbar = ({setshowlogin}) => {
  const [menus, Setmenus] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='nav-logo' />
        <ul>
          <Link to = {'/'} onClick={()=>Setmenus("home")}className={menus==="home"?"active":""}>Home</Link>
          <a href="#explore-menu" onClick={()=>Setmenus("menu")}className={menus==="menu"?"active":""}>menu</a>
          <a onClick={()=>Setmenus("mobile-app")}className={menus==="mobile-app"?"active":""}>mobile-app</a>
          <a onClick={()=>Setmenus("contact-us")}className={menus==="contact-us"?"active":""}>contact-us</a>
        </ul>
        <div className='nav-right'>
          <img src={assets.search_icon} alt='' className='nav-search-icon' />
          <div className='nav-search-icon'>
            <Link to={'/cart'} ><img src={assets.basket_icon} alt='' /></Link>
            <div className='dot'></div>
          </div>
          <button onClick={()=>setshowlogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar