import React from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";

import CardContainerHook from "../../customHook/product/card-container-hook";
const CardProductsContainer = ({ products, title, btntitle, pathText }) => {
  // get favorite items from card-container-hook
  const [favItem, userFavList] = CardContainerHook();

  return (
    <Container>
      {products && (
        <SubTitle title={title} btntitle={btntitle} pathText="/products" />
      )}
      <Row className="justify-content-between ">
        {products ? (
          products.map((item, index) => (
            <ProductCard key={index} product={item} favItem={favItem} />
          ))
        ) : (
          <h1>لا يوجد منتجات</h1>
        )}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
