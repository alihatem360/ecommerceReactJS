import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import GetAllUserCartHook from "../../customHook/cart/get-all-user-cart-hook";
const CartPage = () => {
  const [numOfCartItems, productItems, couponNameResponse, totalAfterDiscount] =
    GetAllUserCartHook();

  return (
    <Container className="" style={{ minHeight: "680px" }}>
      <Row>
        <div className="cart-title mt-4">عربه التسوق</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          {productItems.products ? (
            productItems.products.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          ) : (
            <div className="cart-empty">عربه التسوق فارغه</div>
          )}
        </Col>
        <Col xs="6" md="3">
          <CartCheckout
            productItems={productItems}
            couponNameResponse={couponNameResponse}
            totalAfterDiscount={totalAfterDiscount}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
