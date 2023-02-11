import React, { useEffect } from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteAllUserCartHook from "../../customHook/cart/delete-all-user-cart-hook";
import ApplayCouponCartHook from "../../customHook/cart/applay-coupon-cart-hook";

const CartCheckout = ({
  productItems,
  totalAfterDiscount,
  couponNameResponse,
}) => {
  const [clearAllUserCartHandler] = DeleteAllUserCartHook();
  const [applayCouponCartHandler, coupon, handelOnChangeCoupon] =
    ApplayCouponCartHook();

  useEffect(() => {
    if (couponNameResponse) {
      handelOnChangeCoupon(couponNameResponse);
    }
  }, [couponNameResponse]);

  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            value={coupon}
            onChange={(e) => handelOnChangeCoupon(e.target.value)}
            type="text"
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
          />
          <button
            className="copon-btn d-inline "
            onClick={applayCouponCartHandler}
          >
            تطبيق
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalAfterDiscount >= 1
            ? ` بعد الخصم : ${totalAfterDiscount}  ..الاصلي :  ${productItems.totalCartPrice} `
            : `السعر الاصلي : ${
                productItems.totalCartPrice ? productItems.totalCartPrice : 0
              }  `}
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
