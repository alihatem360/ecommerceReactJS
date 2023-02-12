import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";

import PaginationCompontent from "../../Components/Utility/Pagination";
import AllProductsByBrandHook from "../../customHook/brand/all-products-by-brand-hook";
const AllProductsByBrandPage = () => {
  const [loading, products, paginationResult, handelPaginate] =
    AllProductsByBrandHook();

  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "660px" }}>
        <div className="">
          <Row className="d-flex flex-row">
            <Col sm="10" xs="11" md="11">
              {products.length > 0 ? (
                <CardProductsContainer
                  title=""
                  btntitle=""
                  products={products}
                />
              ) : (
                <div className="d-flex justify-content-center">
                  <h2>لا يوجد منتجات</h2>
                </div>
              )}
            </Col>
          </Row>

          {paginationResult.numberOfPages > 1 ? (
            <PaginationCompontent
              paginationPageNumber={paginationResult.numberOfPages}
              onPress={handelPaginate}
            />
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default AllProductsByBrandPage;
