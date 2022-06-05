import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setClass } from "../../redux/cart/reducerFinalOrder";
import "./index.scss";
import Model from "../Model";
/* import arrModels from "../../data/modelArr"; */
/* import ImgOne from "../../assets/img/image 1.png";
import ImgTwo from "../../assets/img/image 2.png";
import ImgThree from "../../assets/img/image 3.png";
import ImgFour from "../../assets/img/image 4.png"; */

function ModelContainer() {

  const [contentCart, setContentCart] = useState([]); 

useEffect (() => {
    async function fetchData () {
      try {
         const [contentCartResponse] = await Promise.all ([
           axios.get('https://6288c18410e93797c15e9916.mockapi.io/Model')
         ]);
        setContentCart(contentCartResponse.data)
        
      }catch(error) {
        console.log(error);
      }

    }
    fetchData();
    
}, []);
   
   
/* console.log(contentCart) */

  /* axios.get('https://6288c18410e93797c15e9916.mockapi.io/Model')
  .then((response) => {
    console.log(response.data)
  }) 
  .catch((error) => {
    console.log(error)
  }) */

  const dispatch = useDispatch();
  const handleClickClassCar = (value) => {
    dispatch(setClass(value));
  };
  const classCart = useSelector(({finalOrder}) => finalOrder.classCar);

  /* const economCar = arrModels.filter((cart) => cart.class === "economy");
  const businessCar = arrModels.filter((cart) => cart.class === "business"); */
  const economCar = contentCart.filter((cart) => cart.class === "economy");
  const businessCar = contentCart.filter((cart) => cart.class === "business");

  return (
    <div>
      <div className="tabs_left_content_radioContent">
        <label className="radio_text" id="machineСlass">
        <input
          className="radio_box"
          name="elem"
          type="radio"
          value="all"
          htmlFor='machineСlass'
          defaultChecked
          onClick={(e) => handleClickClassCar(e.target.value)}
        ></input>
        <span className="fake"></span>
        <span className="radio_text_color">Все модели</span>
        </label>

        <label className="radio_text" id="machineСlass">
        <input
          className="radio_box"
          name="elem"
          type="radio"
          value="economy"
          htmlFor='machineСlass'
          onClick={(e) => handleClickClassCar(e.target.value)}
        ></input>
        <span className="fake"></span>
        <span className="radio_text_color">Эконом</span>
        </label>

        <label className="radio_text" id="machineСlass">
        <input
          className="radio_box"
          name="elem"
          type="radio"
          value="business"
          htmlFor='machineСlass'
          onClick={(e) => handleClickClassCar(e.target.value)}
        ></input>
        <span className="fake"></span>
        <span className="radio_text_color">Бизнес</span>
        </label>
      </div>

      {classCart === "business" ? (
        <div className="active-tabs-content-model_cart">
          {businessCar.map((cart) => (
            <Model cart={cart} key={cart.id} />
          ))}
        </div>
      ) : classCart === "economy" ? (
        <div className="active-tabs-content-model_cart">
          {economCar.map((cart) => (
            <Model cart={cart} key={cart.id} />
          ))}
        </div>
      ) : (
        <div className="active-tabs-content-model_cart">
          {contentCart.map((cart) => (
            <Model cart={cart} key={cart.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ModelContainer;
