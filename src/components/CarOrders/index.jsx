import React, { useState, useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchDataCarOrders } from "../../redux/dataThunk/fetchDataThunk";
import CarOrdersInput from "../CarOrdersInputs";
import PaginationCarOrders from "../Common/PaginationAdminPanel";
import OrderCardLine from "../OrderCardLine";
import "./index.scss";

const limitCarsPerPage = 3;

const CarOrders = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { dataOrders, loadingOrders } = useSelector(({ getData }) => getData);
  const { totalCars } = dataOrders;
  const { data } = dataOrders;
  const location = useLocation();
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const stringFilter = useCallback(
    () => ({
      name: searchParams.get("name") || "",
      periodOfTime: searchParams.get("periodOfTime") || "",
      cityAuto: searchParams.get("city") || "",
      orderStatus: searchParams.get("orderStatus") || "",
    }),
    [searchParams]
  );

  useEffect(() => {
    dispatch(
      fetchDataCarOrders({
        urlFilter: stringFilter(),
        page: currentPage,
        limit: limitCarsPerPage,
      })
    );
  }, [dispatch, location.search, currentPage, stringFilter]);

  return (
    <div>
      <CarOrdersInput />
      {!loadingOrders ? (
        <OrderCardLine dataCurrent={data || []} />
      ) : (
        <h3 className="carOrders__notFound">Данные загружаются</h3>
      )}
      <PaginationCarOrders
        carPerPage={limitCarsPerPage}
        totalCars={totalCars}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default memo(CarOrders);
