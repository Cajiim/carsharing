import React, { useState, useEffect, memo } from "react";
import axios from "axios";

import PaginationAdminPanel from "../../../ui/PaginationAdminPanel";
import CarListFiltrInputs from "../../../ui/CarListFiltrInputs";
import CarListTable from "../CarListTable";
import "./index.scss";

function CarListAdminPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [carPerPage] = useState(8);
  const [contentCart, setContentCart] = useState([]);

  const [carNameForFiltr, setCarNameForFiltr] = useState("");
  const [minPriceForFiltr, setMinPriceForFiltr] = useState("");
  const [maxPriceForFiltr, setMaxPriceForFiltr] = useState("");
  const [carTypeForFiltr, setCarTypeForFiltr] = useState("");
 
  const [state, setState] = useState();
  function fetchData() {
    setState(axios
      .get("https://6288c18410e93797c15e9916.mockapi.io/Cars")
      .then((res) => setContentCart(res.data))
      .catch((error) => console.log(error, "Ошибка")));
  }

  useEffect(() => {
    fetchData();
    return () => {
      setState();
    };
  }, []);

  const lastCarIndex = currentPage * carPerPage;
  const firstCarIndex = lastCarIndex - carPerPage;

  let data = contentCart;

  if (carNameForFiltr !== "") {
    data = data.filter((el) => el.name.includes(carNameForFiltr));
  }
  if (minPriceForFiltr !== "") {
    data = data.filter((el) => el.minPrice.includes(minPriceForFiltr));
  }
  if (maxPriceForFiltr !== "") {
    data = data.filter((el) => el.maxPrice.includes(maxPriceForFiltr));
  }
  if (carTypeForFiltr !== "") {
    data = data.filter((el) => el.typeCarCart.includes(carTypeForFiltr));
  }

  const dataCurrent = data.slice(firstCarIndex, lastCarIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const allNames = contentCart.map((el) => el.name);
  const allMinPrice = contentCart.map((el) => el.minPrice);
  const allMaxPrice = contentCart.map((el) => el.maxPrice);
  const allTypeCars = contentCart.map((el) => el.typeCarCart);
  const uniqueNames = [...new Set(allNames)];
  const uniqueMinPrice = [...new Set(allMinPrice)];
  const uniqueMaxPrice = [...new Set(allMaxPrice)];
  const uniqueTypeCars = [...new Set(allTypeCars)];

  return (
    <div className="carListAdminPanel_container">
      <h2 className="carListAdminPanel_container_title">Список автомобилей</h2>
      <div className="carListAdminPanel_container_mainContent">
        <CarListFiltrInputs
          setCarNameForFiltr={setCarNameForFiltr}
          setMinPriceForFiltr={setMinPriceForFiltr}
          setMaxPriceForFiltr={setMaxPriceForFiltr}
          setCarTypeForFiltr={setCarTypeForFiltr}
          uniqueNames={uniqueNames}
          uniqueMinPrice={uniqueMinPrice}
          uniqueMaxPrice={uniqueMaxPrice}
          uniqueTypeCars={uniqueTypeCars}
        />

        {state ? (<CarListTable dataCurrent={dataCurrent}/>) : null}

        <PaginationAdminPanel
          carPerPage={carPerPage}
          totalCars={data.length}
          paginate={paginate}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default memo(CarListAdminPanel);
