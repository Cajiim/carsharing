import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import prev from "../../assets/svg/adminPanelSvg/prev.svg";
import next from "../../assets/svg/adminPanelSvg/next.svg";

import style from "./index.scss";

const cn = classNames.bind(style);

function Pagination({
  carPerPage,
  totalCars,
  paginate,
  setCurrentPage,
  currentPage,
}) {
  Pagination.propTypes = {
    carPerPage: PropTypes.number,
    totalCars: PropTypes.number,
    paginate: PropTypes.func,
    setCurrentPage: PropTypes.number,
    currentPage: PropTypes.number,
  };
  Pagination.defaultProps = {
    carPerPage: null,
    totalCars: null,
    paginate: null,
    setCurrentPage: null,
    currentPage: 1,
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCars / carPerPage); i += 1) {
    pageNumbers.push(i);
  }
  const lastListPage = Math.ceil(totalCars / carPerPage);
  const nextPage = () => setCurrentPage((pre) => pre + 1);
  const prevPage = () => setCurrentPage((pre) => pre - 1);

  return (
    <ul className="pagination_container">
      <img
        src={prev}
        alt="prev"
        onClick={prevPage}
        className={cn("pagination_container_prevButton", {
          pagination_container_prevButton_disabled: currentPage === 1,
        })}
      ></img>
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => paginate(number)}
          className={cn("pagination_container_numbers", {
            pagination_container_numbers_active: currentPage === number,
          })}
        >
          {number}
        </li>
      ))}

      <img
        src={next}
        alt="next"
        onClick={nextPage}
        className={cn("pagination_container_nextButton", {
          pagination_container_nextButton_disabled:
            lastListPage === currentPage,
        })}
      ></img>
    </ul>
  );
}

export default Pagination;
