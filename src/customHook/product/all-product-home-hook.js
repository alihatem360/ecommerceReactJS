import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/producAction";

const AllProductHomeHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const allProducts = useSelector((state) => state.productReducer.allProducs);

  let mostSoldProducts = [];
  let famProducts = [];
  if (allProducts.data) {
    mostSoldProducts = allProducts.data.data.slice(0, 4);
    famProducts = allProducts.data.data.slice(4, 8);
  } else {
    mostSoldProducts = [];
  }
  return [mostSoldProducts, famProducts, allProducts];
};

export default AllProductHomeHook;
