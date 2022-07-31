import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const queryString = require("query-string");

export const QueryStringCarList = () => {
  const {
    filtrCarListName,
    filtrCarListMinPrice,
    filtrCarListMaxPrice,
    filtrCarListCarType,
  } = useSelector(({ filterCarList }) => filterCarList); 

  const location = useLocation();
  const parsed = queryString.parse(location.search);
  parsed.name = filtrCarListName !== '' ?  filtrCarListName : null;
  parsed.minPrice = filtrCarListMinPrice !== '' ?  filtrCarListMinPrice : null;
  parsed.maxPrice = filtrCarListMaxPrice !== '' ?  filtrCarListMaxPrice : null;
  parsed.typeCarCart = filtrCarListCarType !== '' ?  filtrCarListCarType : null;
  const stringified = queryString.stringify(parsed);
  location.search = stringified;
  const totalUrl = location.search 
  return totalUrl;
};


export const queryStringCarOrders = 12;
