import { useSearchParams } from "react-router-dom";

const useParametersCarOrders = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const carOrdersQuery = {
    name: searchParams.get("name") || "",
    periodOfTime: searchParams.get("periodOfTime") || "",
    city: searchParams.get("city") || "",
    orderStatus: searchParams.get("orderStatus") || "",
    page: searchParams.get("_page") || "",
    limit: searchParams.get("_limit") || "",
  };
  const setCarOrdersQuery = (name, value) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };
  const deleteCarOrdersQuery = (name) => {
    searchParams.delete(name);
    setSearchParams(searchParams);
  };
  return { carOrdersQuery, setCarOrdersQuery, deleteCarOrdersQuery };
};

export default useParametersCarOrders;
