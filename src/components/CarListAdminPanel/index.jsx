import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginationAdminPanel from "../PaginationAdminPanel";
import "./index.scss";

function CarListAdminPanel() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [carPerPage] = useState(8);
  const [contentCart, setContentCart] = useState([]);

  async function fetchData() {
    setLoading(true);
    axios
      .get("https://6288c18410e93797c15e9916.mockapi.io/Cars")
      .then((res) => setContentCart(res.data))
      .catch((error) => console.log(error, "Ошибка"));
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const lastCarIndex = currentPage * carPerPage;
  const firstCarIndex = lastCarIndex - carPerPage;
  const currentCars = contentCart.slice(firstCarIndex, lastCarIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <div className="carListAdminPanel_container">
      <h2 className="carListAdminPanel_container_title">Список автомобилей</h2>
      <div className="carListAdminPanel_container_mainContent">
        <div className="carListAdminPanel_container_mainContent_sorting">
          <div className="carListAdminPanel_container_mainContent_sorting_input">
            <input className="carListAdminPanel_container_mainContent_sorting_input_name"></input>
            <input className="carListAdminPanel_container_mainContent_sorting_input_maxPrice"></input>
            <input className="carListAdminPanel_container_mainContent_sorting_input_minPrice"></input>
            <input className="carListAdminPanel_container_mainContent_sorting_input_class"></input>
          </div>
          <div className="carListAdminPanel_container_mainContent_sorting_bottons">
            <button
              type="button"
              className="carListAdminPanel_container_mainContent_sorting_bottons_reset"
            >
              Reset
            </button>
            <button
              type="button"
              className="carListAdminPanel_container_mainContent_sorting_bottons_apply"
            >
              Apply
            </button>
          </div>
        </div>
        <table className="carListAdminPanel_container_mainContent_table">
          <thead>
            <tr>
              <th scope="col">Название</th>
              <th scope="col">Минимальная цена</th>
              <th scope="col">Максимальная цена</th>
              <th scope="col">Модель</th>
              <th scope="col">Класс</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              currentCars.map((el) => (
                <tr key={el.id}>
                  <th
                    className="carListAdminPanel_container_mainContent_table_lines"
                    scope="row"
                  >
                    {el.name}
                  </th>
                  <td>{el.minPrice}</td>
                  <td>{el.maxPrice}</td>
                  <td>{el.model}</td>
                  <td>{el.class}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <PaginationAdminPanel
          carPerPage={carPerPage}
          totalCars={contentCart.length}
          paginate={paginate}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default CarListAdminPanel;
