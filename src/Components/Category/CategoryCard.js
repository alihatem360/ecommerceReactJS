import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ img, background, title, itemID }) => {
  const baseURL = "https://ecommerce-api-p9x7.onrender.com";
  console.log(img, "img");
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className=" d-flex justify-content-around "
    >
      <div className="allCard mb-3 d-flex justify-content-center align-items-center">
        <div
          className="categoty-card "
          style={{ backgroundColor: `${background}` }}
        >
          <Link
            to={`/products/allCategory/${itemID}`}
            style={{ textDecoration: "none" }}
          >
            <img
              alt="zcv"
              src={
                img.startsWith("undefined")
                  ? baseURL + img.slice("undefined".length)
                  : img
              }
              className="categoty-card-img"
            />
            <p className="categoty-card-text my-2">{title}</p>
          </Link>
        </div>{" "}
      </div>
    </Col>
  );
};

export default CategoryCard;
