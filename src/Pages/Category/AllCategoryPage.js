import React from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import AllCategoryPageHook from "../../customHook/category/all-category-page-hook";

const AllCategoryPage = () => {
  const [category, loading, pageNumbers, setPageNumber] = AllCategoryPageHook();
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
