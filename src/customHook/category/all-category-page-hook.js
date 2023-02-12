import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
const AllCategoryPageHook = () => {
  //  تحدد عدد الصفحات التي ستظهر في الباجنيشن و هذا العدد يتغير عند تغير عدد الصفحات
  // و عددالعناصر في كل صفحه
  const [limitPage, setLimitPage] = useState(6);
  const dispatch = useDispatch();
  // when app start get all category
  useEffect(() => {
    const getAllCategory = async () => {
      await dispatch(getAllCategory(limitPage));
    };
    getAllCategory();
  }, []);
  //  get all category from redux and store it in category const
  const category = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.isLoding);

  // get number of pages from redux and store it in pageNumbers const
  let pageNumbers = 0;
  try {
    if (category.paginationResult) {
      pageNumbers = category.paginationResult.numberOfPages;
    }
  } catch (e) {
    console.log(e);
  }

  // set page number when user click on pagination

  const setPageNumber = (pageNumber) => {
    dispatch(getAllCategoryPage(pageNumber, limitPage));
  };

  return [category, loading, pageNumbers, setPageNumber];
};

export default AllCategoryPageHook;
