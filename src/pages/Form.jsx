import "../scss/form.scss"
import React, { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/"

const Form = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({
    img: '',
    title: '',
    price: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Tikriname, ar visi įvesties laukai yra užpildyti
    if (!formData.img || !formData.title || !formData.price) {
      alert('Užpildykite visus laukelius :)');
      return;
    }
  
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then(() => {
        alert('Product added successfully');
        setFormData({ img: '', title: '', price: '' });
        navigate('/products');
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <nav>
        <NavLink to="/products" className={location.pathname === '/products' ? 'active' : ''}>
          Products
        </NavLink>
        <NavLink to="/form" className={location.pathname === '/form' ? 'active' : ''}>
          Form
        </NavLink>
      </nav>
      <h1>Pridėti prekę</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="url"
          name="img"
          placeholder="img url"
          value={formData.img}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="number"
          step="0.01"
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
