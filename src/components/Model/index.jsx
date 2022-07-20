import { React, memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setModelInCart } from "../../redux/cart/reducerFinalOrder";

import style from "./index.scss";

const cn = classNames.bind(style);

const Model = ({ cart }) => {
  Model.propTypes = {
    cart: PropTypes.array,
  };
  Model.defaultProps = {
    cart: [],
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setModelInCart(cart));
  };

  const selectedModel = useSelector((state) => state.finalOrder.modelInCart);

  return (
    <li
      className={cn("cartModel", {
        cartModel_active: selectedModel?.id === cart.id,
      })}
      onClick={handleClick}
    >
      <div className="cartModel__text">
        <p className="cartModel__text_name">{cart.name}</p>
        <p className="cartModel__text_price">
          {Number(cart.minPrice).toLocaleString()} -{" "}
          {Number(cart.maxPrice).toLocaleString()}
        </p>
      </div>
      <img src={cart.imgCar} className="cartModel__img" alt="car"></img>
    </li>
  );
}

export default memo(Model);