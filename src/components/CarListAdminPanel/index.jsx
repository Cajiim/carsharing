import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import PaginationAdminPanel from "../Common/PaginationAdminPanel";
import { fetchDataFullCarList } from "../../redux/dataThunk/fetchDataThunk";
import CarListFiltrInputs from "../CarListFiltrInputs";
import CarListTable from "../CarListTable";
import "./index.scss";

const limitCarsPerPage = 8;
const CarListAdminPanel = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const { loadingFullCarList, dataFullCarList } = useSelector(
    ({ getData }) => getData
  );
  const { totalCars } = dataFullCarList;
  const { data } = dataFullCarList;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const location = useLocation();

  const stringFilter = useCallback(
    () => ({
      name: searchParams.get("name") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      typeCarCart: searchParams.get("typeCarCart") || "",
    }),
    [searchParams]
  );

  useEffect(() => {
    dispatch(
      fetchDataFullCarList({
        urlFilter: stringFilter(),
        page: currentPage,
        limit: limitCarsPerPage,
      })
    );
  }, [currentPage, dispatch, location.search, stringFilter]);

  return (
    <div className="carListAdminPanel">
      <h2 className="carListAdminPanel__title">Список автомобилей</h2>
      <div className="carListAdminPanel__mainContent">
        <CarListFiltrInputs />
        {!loadingFullCarList ? (
          <>
            <CarListTable dataCurrent={data || []} />
            <PaginationAdminPanel
              carPerPage={limitCarsPerPage}
              totalCars={totalCars}
              paginate={paginate}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        ) : (
          <h3 className="carListAdminPanel__notFound">Загрузка данных</h3>
        )}
      </div>
    </div>
  );
};

export default CarListAdminPanel;
