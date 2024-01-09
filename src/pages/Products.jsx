import "../scss/products.scss"
import "../scss/buttons.scss"
import "../scss/nav.scss"

import React, { useEffect, useState } from 'react';


const Products = () => {
  const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/"
  const [data, setData] = useState([])
  
  useEffect(() => {
      const fetchData = async () => {
          const resp = await fetch(BASE_URL)
          const result = await resp.json()
          setData(result)
      }
  
      fetchData()
  }, [])

  const handleDelete = async (id) => {
    try {
        const resp = await fetch(BASE_URL + id, {
          method: "DELETE",
          })

        if(resp.ok) {     
          const result = await resp.json()

          alert(id)
        }

    } catch (error) {
        console.error("Error during DELETE request:", error)
    }
  }
  

  return (
    <section id="app" className="products">
      {data.map((el, index) => (
        <div className="product" key={index}>
          <img src={el.image} alt={el.title}/>
          <p>{el.title}</p>
          <p className="price">{el.price}</p>
          <button className="button" onClick={() => handleDelete(el.id)}>Ištrinti</button>

        </div>
      ))}
      
    </section>
  )
}


export default Products;