import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandCard from "./BrandCard";
// import brand1 from "../../images/brand1.png";
// import brand2 from "../../images/brand2.png";
// import brand3 from "../../images/brand3.png";
import { Spinner } from "react-bootstrap";
const BrandContainer = ({ data, loading }) => {
  console.log(data, "data", loading, "loading", "from brand container");
  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل الماركات</div>
        <Row className="my-1 justify-content-between">
          {loading === false ? (
            data ? (
              data.map((item, index) => (
                <BrandCard key={index} img={item.image} />
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

export default BrandContainer;
