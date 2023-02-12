import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../customHook/product/view-produc-details-hook";
import AddProductToCartHook from "../../customHook/cart/add-product-to-cart-hook";
const ProductsText = () => {
  const { id } = useParams();

  const [product, images, category, brand] = ViewProductDetailsHook(id);

  const [
    cart,
    addToCartHandler,
    clickedColor,
    handelClickedColor,
    clickedColorIndex,
  ] = AddProductToCartHook(id, product);
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">
          {category.name ? category.name : "التصنيف"}
        </div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {product.title ? product.title : "اسم المنتج"}
            <div className="cat-rate d-inline mx-3">
              {product.ratingsQuantity ? product.ratingsQuantity : "0"}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">
            {brand.name ? brand.name : "اسم الماركة"}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {product.availableColors
            ? product.availableColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="color ms-2 "
                    onClick={() => handelClickedColor(index, color)}
                    style={{
                      backgroundColor: color,
                      border:
                        clickedColorIndex === index ? "2px solid #332C39" : "",
                    }}
                  ></div>
                );
              })
            : "لا يوجد لون"}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {product.description ? product.description : "وصف المنتج"}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {product.priceAfterDiscount ? (
              <React.Fragment>
                <div
                  className="product-price d-inline mx-3"
                  style={{ textDecoration: "line-through", color: "red" }}
                >
                  {product.price} جنيه
                </div>

                <div className="product-price d-inline">
                  {product.priceAfterDiscount} جنيه
                </div>
              </React.Fragment>
            ) : (
              <div className="product-price d-inline">{product.price} جنيه</div>
            )}
          </div>

          <div
            className="product-cart-add px-3 py-3 d-inline mx-3"
            onClick={addToCartHandler}
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsText;
