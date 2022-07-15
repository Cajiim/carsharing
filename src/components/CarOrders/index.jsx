import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector } from "react-redux/es/exports";
import CarOrdersInput from "../CarOrdersInputs";
import PaginationCarOrders from "../PaginationCarOrders";
import OrderCardLine from "../OrderCardLine";
import "./index.scss";

function CarOrders() {
  const now = new Date();
  const [currentPage, setCurrentPage] = useState(1);
  const [carPerPage] = useState(3);
  const [contentOrder, setContentOrder] = useState([]);

  async function fetchData() {
    axios
      .get("https://6288c18410e93797c15e9916.mockapi.io/FinalOrder")
      .then((res) => setContentOrder(res.data))
      .catch((error) => console.log(error, "Ошибка"));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const lastCarIndex = currentPage * carPerPage;
  const firstCarIndex = lastCarIndex - carPerPage;

  const {
    periodOfTimeForFiltr,
    carNameForFiltr,
    cityForFiltr,
    orderStatusForFiltr,
  } = useSelector(({ carOrders }) => carOrders);

  let data = contentOrder;
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
      <CarOrdersInput contentOrder={contentOrder} />

      <OrderCardLine dataCurrent={dataCurrent} />

      {data && data.length === 0 ? (
        <h3 className="carOrders_mainContent_notFound">
          По вашему запросу ничего не найдено!
        </h3>
      ) : null}

      <PaginationCarOrders
        carPerPage={carPerPage}
        totalCars={data.length}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default CarOrders;
