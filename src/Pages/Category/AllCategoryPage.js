import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import getAllCategory from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
const AllCategoryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory(2));
  }, []);

  const category = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.isLoding);

  let pageNumbers = 0;
  if (category.paginationResult) {
    pageNumbers = category.paginationResult.numberOfPages;
  }

  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      <PaginationCompontent
        pageNumbers={2}
        paginationPageNumber={pageNumbers}
      />
    </Container>
  );
};

export default AllCategoryPage;
