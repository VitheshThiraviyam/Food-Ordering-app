import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../assets/assets';
const Exploremenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>
        Discover a wide range of delicious meals crafted to match every taste. Browse through our menu, explore your favorite dishes, and choose the perfect meal with just a tap. Enjoy a smooth and effortless ordering experience.
        </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt='' />
                        <p>{item.menu_name}</p>
                    </div>

                )
            })}
        </div>
    </div>
  )
}

export default Exploremenu