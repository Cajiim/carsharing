import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.scss";

const CarListTable = ({ dataCurrent }) => (
  <table className="table-wrapper">
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
          <th className="table-wrapper__lines" scope="row">
            <Link
              to={`/admin/carCart?carNumber=${el.id}`}
              className="table-wrapper__links"
            >
              {el.name}
            </Link>
          </th>
          <td>
            <Link
              to={`/admin/carCart?carNumber=${el.id}`}
              className="table-wrapper__links"
            >
              {Number(el.minPrice).toLocaleString()}
            </Link>
          </td>
          <td>
            <Link
              to={`/admin/carCart?carNumber=${el.id}`}
              className="table-wrapper__links"
            >
              {Number(el.maxPrice).toLocaleString()}
            </Link>
          </td>
          <td>
            <Link
              to={`/admin/carCart?carNumber=${el.id}`}
              className="table-wrapper__links"
            >
              {el.model}
            </Link>
          </td>
          <td>
            <Link
              to={`/admin/carCart?carNumber=${el.id}`}
              className="table-wrapper__links"
            >
              {el.typeCarCart}
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

CarListTable.propTypes = {
  dataCurrent: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      minPrice: PropTypes.string,
      maxPrice: PropTypes.string,
      model: PropTypes.string,
      imgCar: PropTypes.string,
      typeCarCart: PropTypes.string,
      descriptionCar: PropTypes.string,
      arrAllColors: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
CarListTable.defaultProps = {
  dataCurrent: PropTypes.arrayOf(
    PropTypes.shape({
      id: "",
      name: "",
      minPrice: "",
      maxPrice: "",
      model: "",
      imgCar: "",
      typeCarCart: "",
      descriptionCar: "",
      arrAllColors: [],
    })
  ),
};

export default memo(CarListTable);
