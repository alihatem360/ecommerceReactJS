import React from "react";
import { Col, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import { Link } from "react-router-dom";
const UserAllOrderCard = ({ item }) => {
  if (item) {
    console.log(item, "item");
  }
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
          <Link
            to={`/products/${item.product.id}`}
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <img
              width="100%"
              height="120px"
              style={{
                borderRadius: "10px",
              }}
              src={
                item.product
                  ? item.product.imageCover[0] !== "h"
                    ? `http://127.0.0.1:8000/products/${item.product.imageCover}`
                    : item.product.imageCover
                  : mobile
              }
              alt="product"
            />
          </Link>
        </Col>
        <Col xs="8" md="6">
          <div className="d-inline pt-2 cat-title">
            {item && item.product.title}
          </div>
          <div className="d-inline pt-2 cat-rate me-2">
            {" "}
            {item && item.product.ratingsQuantity}
          </div>
          <div className="rate-count d-inline p-1 pt-2">( تقييم)</div>
          <div className="mt-3 d-flex justify-content-start">
            <div className="cat-text  d-inline">الكميه</div>
            <input
              value={item && item.count}
              className="mx-2 "
              type="text"
              style={{ width: "40px", height: "29px" }}
            />

            <div
              className="color ms-2 "
              style={{
                backgroundColor: item && item.color,
              }}
            ></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
