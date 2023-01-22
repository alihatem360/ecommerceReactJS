import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductPage } from "../../redux/actions/producAction";

const SearchProductsHook = () => {
  const [limitPage, setLimitPage] = useState(12);
  const [paginatePage, setPaginatePage] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductPage(paginatePage, limitPage));
  }, [paginatePage, limitPage]);

  const handelPaginate = (page) => {
    setPaginatePage(page);
  };

  const allProducts = useSelector((state) => state.productReducer.allProducs);

  let mostSoldProducts = [];
  let pagination = [];
  if (allProducts.data) {
    mostSoldProducts = allProducts.data.data;
    pagination = allProducts.data.paginationResult;
  } else {
    mostSoldProducts = [];
    pagination = [];
  }
  return [mostSoldProducts, pagination, handelPaginate];
};

export default SearchProductsHook;
