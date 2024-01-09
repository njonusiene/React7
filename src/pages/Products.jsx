import "../scss/products.scss"
import "../scss/buttons.scss"
import "../scss/nav.scss"

import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/";

const ProductsPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error during data fetch:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(BASE_URL + "/" + id, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      } else {
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error during DELETE request:", error);
    }
  };

  return (
    <div>
    
      <section id="app" className="products">
        {products.map((x) => (
          <div key={x.id} className="product">
            <img src={x.image} alt={x.title} />
            <p>{x.title}</p>
            <p className="price">€{x.price}</p>
            <button className="button" onClick={() => deleteProduct(x.id)}>
              Ištrinti
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;