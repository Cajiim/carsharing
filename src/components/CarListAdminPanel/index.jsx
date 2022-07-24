import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PaginationAdminPanel from "../PaginationAdminPanel";
import { fetchDataFullCarList } from "../../api/fetchDataThunk";
import CarListFiltrInputs from "../CarListFiltrInputs";
import CarListTable from "../CarListTable";
import "./index.scss";

const carPerPage = 8;

const CarListAdminPanel = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const {
    filtrCarListName,
    filtrCarListMinPrice,
    filtrCarListMaxPrice,
    filtrCarListCarType,
  } = useSelector(({ filterCarList }) => filterCarList);

  const { loadingFullCarList, dataFullCarList } = useSelector(
    ({ getData }) => getData
  );

  useEffect(() => {
    dispatch(fetchDataFullCarList());
  }, [dispatch]);

  const lastCarIndex = currentPage * carPerPage;
  const firstCarIndex = lastCarIndex - carPerPage;

  let data = dataFullCarList;

  if (filtrCarListName !== "") {
    data = data.filter((el) => el.name.includes(filtrCarListName));
  }
  if (filtrCarListMinPrice !== "") {
    data = data.filter((el) => el.minPrice.includes(filtrCarListMinPrice));
  }
  if (filtrCarListMaxPrice !== "") {
    data = data.filter((el) => el.maxPrice.includes(filtrCarListMaxPrice));
  }
  if (filtrCarListCarType !== "") {
    data = data.filter((el) => el.typeCarCart.includes(filtrCarListCarType));
  }

  const dataCurrent = data.slice(firstCarIndex, lastCarIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="carListAdminPanel-wrapper">
      <h2 className="carListAdminPanel-wrapper__title">Список автомобилей</h2>
      <div className="carListAdminPanel-wrapper__mainContent">
        <CarListFiltrInputs />
        {!loadingFullCarList ? (
          <CarListTable dataCurrent={dataCurrent} />
        ) : (
          <h3 className="carListAdminPanel-wrapper_notFound">Загрузка данных</h3>
        )}
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
};

export default CarListAdminPanel;
