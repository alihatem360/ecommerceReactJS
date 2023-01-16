import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
const AllCategoryPage = () => {
  //  تحدد عدد الصفحات التي ستظهر في الباجنيشن و هذا العدد يتغير عند تغير عدد الصفحات
  // و عددالعناصر في كل صفحه
  const [limitPage, setLimitPage] = useState(6);
  const dispatch = useDispatch();
  // when app start get all category
  useEffect(() => {
    dispatch(getAllCategory(limitPage));
  }, []);
  //  get all category from redux and store it in category const
  const category = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.isLoding);

  // get number of pages from redux and store it in pageNumbers const
  let pageNumbers = 0;
  if (category.paginationResult) {
    pageNumbers = category.paginationResult.numberOfPages;
  }

  // set page number when user click on pagination
  const setPageNumber = (pageNumber) => {
    dispatch(getAllCategoryPage(pageNumber, limitPage));
    console.log(pageNumber);
  };

  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageNumbers > 1 ? (
        <PaginationCompontent
          paginationPageNumber={pageNumbers}
          onPress={setPageNumber}
        />
      ) : null}
    </Container>
  );
};

export default AllCategoryPage;
