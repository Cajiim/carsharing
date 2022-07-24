import React, { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchDataCarOrders } from "../../api/fetchDataThunk";
import CarOrdersInput from "../CarOrdersInputs";
import PaginationCarOrders from "../PaginationCarOrders";
import OrderCardLine from "../OrderCardLine";
import "./index.scss";

const CarOrders = () => {
  const dispatch = useDispatch();
  const now = new Date();
  const [currentPage, setCurrentPage] = useState(1);
  const [carPerPage] = useState(3);

  const { dataOrders, loadingOrders } = useSelector(
    ({ getData }) => getData
  );

  useEffect(() => {
    dispatch(fetchDataCarOrders());
  }, [dispatch]);

  const lastCarIndex = currentPage * carPerPage;
  const firstCarIndex = lastCarIndex - carPerPage;

  const {
    periodOfTimeForFiltr,
    carNameForFiltr,
    cityForFiltr,
    orderStatusForFiltr,
  } = useSelector(({ carOrders }) => carOrders);

  let data = dataOrders;
  if (carNameForFiltr !== "") {
    data = data.filter((el) => el.modelCar.name.includes(carNameForFiltr));
  }
  if (periodOfTimeForFiltr !== "") {
    data = data.filter((el) =>
      // eslint-disable-next-line no-nested-ternary
      (Math.ceil(
        Math.abs(
          new Date(now).getTime() -
            new Date(el.additionalOptions.startDate).getTime()
        ) /
          (1000 * 3600 * 24)
      ) < 7
        ? "За неделю"
        : Math.ceil(
            Math.abs(
              new Date(now).getTime() -
                new Date(el.additionalOptions.startDate).getTime()
            ) /
              (1000 * 3600 * 24)
          ) < 30
        ? "За месяц"
        : "За год"
      ).includes(periodOfTimeForFiltr)
    );
  }
  if (cityForFiltr !== "") {
    data = data.filter((el) =>
      el.additionalOptions.cityAuto.includes(cityForFiltr)
    );
  }
  if (orderStatusForFiltr !== "") {
    data = data.filter((el) =>
      (Math.abs(
        new Date(now).getTime() <
          new Date(el.additionalOptions.endDate).getTime()
      )
        ? "В процессе"
        : "Завершен"
      ).includes(orderStatusForFiltr)
    );
  }
  const dataCurrent = data?.slice(firstCarIndex, lastCarIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <CarOrdersInput contentOrder={dataOrders} />
      {!loadingOrders ? (
        <OrderCardLine dataCurrent={dataCurrent} />
      ) : (
        <h3 className="carOrders-wrapper__notFound">Данные загружаются</h3>
      )}
      <PaginationCarOrders
        carPerPage={carPerPage}
        totalCars={data.length}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default memo(CarOrders);
