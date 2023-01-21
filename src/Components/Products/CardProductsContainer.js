import React, { useState, useRef } from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Collapse } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";

const CardProductsContainer = ({ products, title, btntitle, pathText }) => {
  return (
    <Container>
      {products && (
        <SubTitle title={title} btntitle={btntitle} pathText="/products" />
      )}
      <Row className="justify-content-between ">
        {products ? (
          products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))
        ) : (
          <h1>لا يوجد منتجات</h1>
        )}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
