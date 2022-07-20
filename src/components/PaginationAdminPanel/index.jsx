import React, { useState, useEffect, memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import prev from "../../assets/svg/prev.svg";
import next from "../../assets/svg/next.svg";

import style from "./index.scss";

const cn = classNames.bind(style);

const Pagination = ({
  carPerPage,
  totalCars,
  paginate,
  setCurrentPage,
  currentPage,
}) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCars / carPerPage); i += 1) {
    pageNumbers.push(i);
  }
  const [arrOfCurrentButtons, setArrOfCurrentButtons] = useState([]);

  /* function paginationNumbers ()  {
    let tempNumberOfPages = [...arrOfCurrentButtons];
    const dotsInitial = "...";
    const dotsLeft = " ...";
    const dotsRight = "... ";
    if( pageNumbers.length <= 5) {
      tempNumberOfPages = [...pageNumbers]
    }
    if ( pageNumbers.length > 5 && currentPage >= 1 && currentPage <= 4) {
      tempNumberOfPages = [1, 2, 3, 4, 5, dotsInitial, pageNumbers.length];
    } else if (pageNumbers.length > 5 && currentPage === 4) {
      const slice = pageNumbers.slice(0, 4);
      tempNumberOfPages = [...slice, dotsInitial, pageNumbers.length];
    } else if (pageNumbers.length > 5 && currentPage >= 5 && currentPage < pageNumbers.length - 2) {
      const sliceOne = pageNumbers.slice(currentPage - 2, currentPage);
      const sliceTwo = pageNumbers.slice(currentPage, currentPage + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliceOne,
        ...sliceTwo,
        dotsRight,
        pageNumbers.length,
      ];
    } else if ( pageNumbers.length > 5 && currentPage > pageNumbers.length - 3) {
      const slice = pageNumbers.slice(pageNumbers.length - 5);
      tempNumberOfPages = [1, dotsLeft, ...slice];
    } else if ( pageNumbers.length > 5 && currentPage === dotsInitial) {
      setCurrentPage(arrOfCurrentButtons[arrOfCurrentButtons.length - 3] + 1);
    } else if ( pageNumbers.length > 5 && currentPage === dotsLeft) {
      setCurrentPage(arrOfCurrentButtons[3] - 2);
    } else if ( pageNumbers.length > 5 && currentPage === dotsRight) {
      setCurrentPage(arrOfCurrentButtons[3] + 2);
    }
    setArrOfCurrentButtons(tempNumberOfPages);
  } */

  /* useEffect(() => {
    paginationNumbers();
  }, [currentPage, totalCars, carPerPage, paginationNumbers]); */

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
      {arrOfCurrentButtons.map((page) => (
        <li
          key={page}
          onClick={() => paginate(page)}
          className={cn("pagination_container_numbers", {
            pagination_container_numbers_active: currentPage === page,
          })}
        >
          {page}
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

Pagination.propTypes = {
  carPerPage: PropTypes.number,
  totalCars: PropTypes.number,
  paginate: PropTypes.func,
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
};
Pagination.defaultProps = {
  carPerPage: null,
  totalCars: null,
  paginate: null,
  setCurrentPage: null,
  currentPage: 1,
};

export default memo(Pagination);
