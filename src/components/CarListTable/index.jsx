import React, {memo} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

const CarListTable = ({ dataCurrent }) => {
  console.log(dataCurrent)
  CarListTable.propTypes = {
    dataCurrent: PropTypes.array,
  };
  CarListTable.defaultProps = {
    dataCurrent: [],
  };

  return (
    <table className="carListTable_container_mainContent_table">
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
        {dataCurrent.map((el) => (
          <tr key={el.id}>
            <th
              className="carListTable_container_mainContent_table_lines"
              scope="row"
            >
              <Link
                to={`/admin/carCart?carNumber=${el.id}`}
                className="carListTable_container_mainContent_table_links"
              >
                {el.name}
              </Link>
            </th>
            <td>
              <Link
                to={`/admin/carCart?carNumber=${el.id}`}
                className="carListTable_container_mainContent_table_links"
              >
                {Number(el.minPrice).toLocaleString()}
              </Link>
            </td>
            <td>
              <Link
                to={`/admin/carCart?carNumber=${el.id}`}
                className="carListTable_container_mainContent_table_links"
              >
                {Number(el.maxPrice).toLocaleString()}
              </Link>
            </td>
            <td>
              <Link
                to={`/admin/carCart?carNumber=${el.id}`}
                className="carListTable_container_mainContent_table_links"
              >
                {el.model}
              </Link>
            </td>
            <td>
              <Link
                to={`/admin/carCart?carNumber=${el.id}`}
                className="carListTable_container_mainContent_table_links"
              >
                {el.typeCarCart}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(CarListTable);
