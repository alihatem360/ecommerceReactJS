import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/producAction";

const SearchProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const allProducts = useSelector((state) => state.productReducer.allProducs);

  let mostSoldProducts = [];

  if (allProducts.data) {
    mostSoldProducts = allProducts.data.data;
  } else {
    mostSoldProducts = [];
  }
  return [mostSoldProducts];
};

export default SearchProductsHook;
