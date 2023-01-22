import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/producAction";
import mobile from "../../images/mobile.png";
import { getCategory } from "../../redux/actions/categoryAction";
import { getSpecificBrand } from "../../redux/actions/brandAction";
import { getRelatedProduct } from "../../redux/actions/producAction";
const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  //  ==================  get product details ==================
  const productDetails = useSelector(
    (state) => state.productReducer.oneProduct
  );

  let product = [];
  if (productDetails.data) {
    product = productDetails.data;
  } else {
    product = [];
  }

  //  ==================  create image array for image gallery ==================
  let images = [];
  //  check if images array is not empty
  if (product.images) {
    // map images array and create new array of objects
    images = product.images.map((image) => {
      return {
        original: image,
      };
    });
  } else {
    // if images array is empty then create new array of objects with default image
    images = [
      {
        original: mobile,
      },
    ];
  }

  //  ==================  get category by id ==================

  useEffect(() => {
    if (product) {
      dispatch(getCategory(product.category));
      dispatch(getSpecificBrand(product.brand));
      dispatch(getRelatedProduct(product.category));
    }
  }, [product]);

  const categoryDetails = useSelector(
    (state) => state.categoryReducer.onCategory
  );

  let category = [];
  if (categoryDetails) {
    category = categoryDetails;
  } else {
    category = [];
  }

  //  ==================  get brand by id ==================

  const brandDetails = useSelector((state) => state.brandReducer.onBrand);
  let brand = [];
  if (brandDetails) {
    brand = brandDetails;
  } else {
    brand = [];
  }

  //  ==================  get related product ==================

  const relatedProductDetails = useSelector(
    (state) => state.productReducer.relatedProduct
  );

  let relatedProduct = [];
  if (relatedProductDetails) {
    relatedProduct = relatedProductDetails;
  } else {
    relatedProduct = [];
  }

  return [product, images, category, brand, relatedProduct];
};

export default ViewProductDetailsHook;
