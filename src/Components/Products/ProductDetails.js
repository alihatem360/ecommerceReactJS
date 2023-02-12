import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductsText from "./ProductsText";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../customHook/product/view-produc-details-hook";

const ProductDetails = () => {
  // id from url params to get product details
  return (
    <Container>
      <Row className="py-3">
        <Col lg="4" className="">
          <ProductGallery />
        </Col>
        <Col lg="8" className="">
          <ProductsText />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
