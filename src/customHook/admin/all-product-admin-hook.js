import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductPage } from "../../redux/actions/producAction";

const AllProductAdminHook = () => {
  //  ==================  number of products per page ==================
  const [limitPage, setLimitPage] = useState(9);
  const [paginatePage, setPaginatePage] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductPage(paginatePage, limitPage));
  }, [limitPage, paginatePage]);

  const handelPaginate = (page) => {
    setPaginatePage(page);
  };

  const allProducts = useSelector((state) => state.productReducer.allProducs);

  let products = [];
  let pagination = [];
  if (allProducts.data) {
    products = allProducts.data.data;
    pagination = allProducts.data.paginationResult;
  } else {
    products = [];
    pagination = [];
  }

  return [products, pagination, handelPaginate];
};

export default AllProductAdminHook;
