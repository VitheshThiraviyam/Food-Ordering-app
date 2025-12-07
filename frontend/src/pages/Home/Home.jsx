import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header';
import Exploremenu from '../../components/Exploremenu';
import Fooddisplay from '../../components/Fooddisplay';

const Home = () => {
  const [category,Setcategory] = useState("All");
  return (
    <div>
        <Header/>
        <Exploremenu category={category} Setcategory={Setcategory}/>
        <Fooddisplay category={category}/> 
    </div>
  )
}

export default Home