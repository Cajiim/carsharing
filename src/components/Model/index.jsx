import React from 'react'

import "./index.scss";

/* import { useState } from "react"; */
import { useDispatch } from "react-redux";
import { setModelInCart } from "../../redux/cart/reducerFinalOrder";


function Model({ cart }) {
  const dispatch = useDispatch(); 
  const handleClick = () => {
    dispatch(setModelInCart(cart));
    
    };
    
  return (
    <div
      className="cartModel"
      onClick={handleClick}
    >
      <div className="cartModel__text">
        <p className="cartModel__text_name">{cart.name}</p>
        <p className="cartModel__text_price">{cart.minPrice} - {cart.maxPrice}</p>
      </div>
      <img src={cart.img} className="cartModel__img" alt="car"></img>
    </div>
  );
}

export default Model;
