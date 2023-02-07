import React from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on2.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import mobile1 from "../../images/mobile1.png";
import ProductCardHook from "../../customHook/product/product-card-hook";
const ProductCard = ({ product, favItem }) => {
  // get favorite items from product-card-hook
  const [favCliched, handelAddToWishList] = ProductCardHook(product, favItem);
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link
          to={`/products/${product._id}`}
          style={{
            textDecoration: "none",
            width: "100%",
          }}
        >
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={
              product.imageCover[0] !== "h"
                ? `http://127.0.0.1:8000/products/${product.imageCover}`
                : product.imageCover
            }
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favCliched ? favon : favoff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
              cursor: "pointer",
            }}
            onClick={handelAddToWishList}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{product.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">
                  {product.ratingsAverage || 0}
                </div>
              </div>
              <div className="d-flex">
                <div className="card-price">{product.price}</div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
