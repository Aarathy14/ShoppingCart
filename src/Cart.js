import axios from "axios";
import './Cart.css' 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Cart() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
  
    setProducts(response.data);
  };

  useEffect(() => {fetchData();}, []);
  return (
    <div className="container">
      {console.log(products, "products")}
      <div className="row">
      <center className="shop fw-bold fs-3  text-decoration-underline">Shopping Page</center>
        {products.map(products => 
            <div className=" box col-3 border border-1 my-3">

          <Link to={`/product/${products.id}`}>
            <div> 
            <img src={products.image} height="100" width="100" />
            <div>{products.title} </div>
            <div>{products.price}</div>
            </div>
        </Link>
        </div>

        )}
      </div>
    </div>
  )
}

export default Cart;
