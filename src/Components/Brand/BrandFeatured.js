import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle.js";
import CategoryCard from "../Category/CategoryCard";

import { Spinner } from "react-bootstrap";
import BrandHomeHook from "../../customHook/brand/home-brand-hook.js";
const BrandFeatured = ({ title, btntitle, pathText }) => {
  if (pathText === "") {
    pathText = "404";
  }

  const [brands, loading] = BrandHomeHook();
  return (
    <div className="my-3">
      <Container>
        <SubTitle title="اشهر الماركات" btntitle="المزيد" pathText={pathText} />
        <Row className="my-1 justify-content-between">
          {loading === false ? (
            brands.data ? (
              brands.data.map((item, index) => (
                <CategoryCard key={index} img={item.image} />
              ))
            ) : (
              <h1>
                <Col className="text-center">لا يوجد ماركات</Col>
              </h1>
            )
          ) : (
            <>
              <Col className="text-center">
                <Spinner animation="border" variant="primary" />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default BrandFeatured;
