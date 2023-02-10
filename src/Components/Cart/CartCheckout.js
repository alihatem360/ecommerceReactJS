import React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteAllUserCartHook from "../../customHook/cart/delete-all-user-cart-hook";
const CartCheckout = ({ productItems }) => {
  const [clearAllUserCartHandler] = DeleteAllUserCartHook();
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
          />
          <button className="copon-btn d-inline ">تطبيق</button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {productItems.totalCartPrice || 0} ريال
        </div>
        <Link
          to="/order/paymethoud"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline "
        >
          <button className="product-cart-add w-100 px-2"> اتمام الشراء</button>
        </Link>
        <button
          className="product-cart-add w-100 px-2 mt-2 bg-danger"
          onClick={clearAllUserCartHandler}
        >
          مسح السلة
        </button>
      </Col>
    </Row>
  );
};

export default CartCheckout;
