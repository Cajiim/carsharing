
import "./index.scss";

import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModelInCart } from "../../redux/cart/reducerFinalOrder";

function Model({ cart }) {
  

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setModelInCart(cart));
  };

  const selectedModel = useSelector((state) => state.finalOrder.modelInCart);

  return (
    <div
      className={
        selectedModel?.id === cart.id ? "cartModel__active" : "cartModel"
      }
      onClick={handleClick}
    >
      <div className="cartModel__text">
        <p className="cartModel__text_name">{cart.name}</p>
        <p className="cartModel__text_price">
          {cart.minPrice} - {cart.maxPrice}
        </p>
      </div>
      <img src={cart.img} className="cartModel__img" alt="car"></img>
    </div>
  );
}

export default Model;
