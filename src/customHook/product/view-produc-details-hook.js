import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/producAction";

const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  const productDetails = useSelector(
    (state) => state.productReducer.oneProduct
  );

  let product = [];
  if (productDetails.data) {
    product = productDetails.data;
  } else {
    product = [];
  }

  return [product];
};

export default ViewProductDetailsHook;
