import React from "react";
import { Container } from "react-bootstrap";
import BrandContainer from "../../Components/Brand/BrandContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import AllBrandPageHook from "../../customHook/brand/all-brand-page-hook";
const AllBrandPage = () => {
  const [brand, loading, pageNumbers, setPageNumber] = AllBrandPageHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <BrandContainer data={brand.data} loading={loading} />
      <PaginationCompontent
        paginationPageNumber={pageNumbers}
        onPress={setPageNumber}
      />
    </Container>
  );
};

export default AllBrandPage;
