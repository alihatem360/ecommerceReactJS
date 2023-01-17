import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrands,
  getAllBrandsPage,
} from "../../redux/actions/brandAction";
const AllBrandPageHook = () => {
  //  تحدد عدد الصفحات التي ستظهر في الباجنيشن و هذا العدد يتغير عند تغير عدد الصفحات
  // و عددالعناصر في كل صفحه
  const [limitPage, setLimitPage] = useState(6);
  const dispatch = useDispatch();
  // when app start get all category
  useEffect(() => {
    dispatch(getAllBrands(limitPage));
  }, []);
  //  get all category from redux and store it in category const
  const brand = useSelector((state) => state.brandReducer.brands);
  const loading = useSelector((state) => state.brandReducer.isloading);

  // get number of pages from redux and store it in pageNumbers const
  let pageNumbers = 0;
  if (brand.paginationResult) {
    pageNumbers = brand.paginationResult.numberOfPages;
  }

  // set page number when user click on pagination
  const setPageNumber = (pageNumber) => {
    dispatch(getAllBrandsPage(pageNumber, limitPage));
    console.log(pageNumber);
  };

  return [brand, loading, pageNumbers, setPageNumber];
};

export default AllBrandPageHook;
