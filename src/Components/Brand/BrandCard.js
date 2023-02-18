import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const BrandCard = ({ img, itemID }) => {
  const baseURL = "https://ecommerce-api-p9x7.onrender.com";

  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-2 d-flex justify-content-center"
    >
      <Card
        className="my-1"
        style={{
          width: "130px",
          height: "130px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Link
          to={`/products/allBrand/${itemID}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            style={{ width: "100%", height: "100%", borderRadius: "16px" }}
            src={
              img.startsWith("undefined")
                ? baseURL + img.slice("undefined".length)
                : img
            }
          />
        </Link>
      </Card>
    </Col>
  );
};

export default BrandCard;
