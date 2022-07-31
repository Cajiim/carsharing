import { React, memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setModelInCart } from "../../redux/cart/reducerFinalOrder";
import style from "./index.scss";

const cn = classNames.bind(style);

const Model = ({ cart }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setModelInCart(cart));
  };
  const { modelInCart } = useSelector(({ finalOrder }) => finalOrder);
  
  return (
    <li
      className={cn("cartModel", {
        cartModel_active: modelInCart?.id === cart.id,
      })}
      onClick={handleClick}
    >
      <div className="cartModel__text">
        <p className="cartModel__name">{cart.name}</p>
        <p className="cartModel__price">
          {Number(cart.minPrice).toLocaleString()} -{" "}
          {Number(cart.maxPrice).toLocaleString()}
        </p>
      </div>
      <img src={cart.imgCar} className="cartModel__img" alt="car"></img>
    </li>
  );
};

Model.propTypes = {
  cart: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    minPrice: PropTypes.string,
    maxPrice: PropTypes.string,
    model: PropTypes.string,
    imgCar: PropTypes.string,
    typeCarCart: PropTypes.string,
    descriptionCar: PropTypes.string,
    arrAllColors: PropTypes.arrayOf(PropTypes.string),
  }),
};
Model.defaultProps = {
  cart: PropTypes.shape({
    id: "",
    name: "",
    minPrice: "",
    maxPrice: "",
    model: "",
    imgCar: "",
    typeCarCart: "",
    descriptionCar: "",
    arrAllColors: [],
  }),
};

export default memo(Model);
