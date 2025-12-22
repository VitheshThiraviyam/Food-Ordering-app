import React from 'react'
import { assets } from '../assets/assets'
import './Add.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
const Add = () => {
  const url = "http://localhost:4000"
  const [image, setImage] = useState(false);
  const [data, Setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad"
  })
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    Setdata(data => ({ ...data, [name]: value }))
  }
 
  const submithandle = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("price", Number(data.price));
    formdata.append("category", data.category);
    formdata.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formdata);
    if (response.data.success) {
      Setdata({
        name: "",
        description: "",
        price: "",
        category: "salad"
      })
      setImage(false);
      toast.success(response.data.message);
    }
    else{
      toast.success(response.data.message);
    }

  }

  return (
    <div className="add">
      <form className='flex-col' onSubmit={submithandle}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt=''></img>
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
        </div>
        <div className="add-img-upload flex-col">
          <p>Product Name</p>
          <input onChange={handleChange} value={data.name} type='text' name='name' placeholder='Enter a product name' required />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={handleChange} value={data.description} name='description' rows="6" placeholder='Enter a description here' required />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={handleChange} value={data.category} name='category'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
        </div>
        <div className="add-price">
          <p>Product price</p>
          <input onChange={handleChange} value={data.price} type='number' name='price' placeholder='Enter the price' required />
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add