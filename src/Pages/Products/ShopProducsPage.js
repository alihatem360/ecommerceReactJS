import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import PaginationCompontent from "../../Components/Utility/Pagination";
import CategorysHeader from "../../Components/Category/CategorysHeader";
import SideFilter from "../../Components/Utility/SideFilter";
import SearchProductsHook from "../../customHook/product/search-product-hook";
const ShopProducsPage = () => {
  const [mostSoldProducts, pagination, handelPaginate, handelSearch, result] =
    SearchProductsHook();

  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container style={{ minHeight: "660px" }}>
        <div className="">
          <SearchCountResult
            onclick={handelSearch}
            title={`
    هناك .. ${result} .. نتيجة بحث
          `}
          />
          <Row className="d-flex flex-row">
            <Col sm="2" xs="2" md="1" className="d-flex">
              <SideFilter />
            </Col>
            <Col sm="10" xs="11" md="11">
              <CardProductsContainer
                title=""
                btntitle=""
                products={mostSoldProducts}
              />
            </Col>
          </Row>

          <PaginationCompontent
            paginationPageNumber={pagination.numberOfPages}
            onPress={handelPaginate}
          />
        </div>
      </Container>
    </div>
  );
};

export default ShopProducsPage;
