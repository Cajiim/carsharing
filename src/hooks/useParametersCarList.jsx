import { useSearchParams } from "react-router-dom";

const useParameters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const carListQuery = {
    name: searchParams.get("name") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    typeCarCart: searchParams.get("typeCarCart") || "",
    page: searchParams.get('_page') || "",
    limit: searchParams.get('_limit') || "",
  };
  const setCarListQuery = (name, value) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };
  const deleteCarListQuery = (name) => {
    searchParams.delete(name);
    setSearchParams(searchParams);
  };
  return { carListQuery, setCarListQuery, deleteCarListQuery };
};

export default useParameters;
