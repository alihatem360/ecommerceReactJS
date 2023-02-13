import React, { useEffect } from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteAllUserCartHook from "../../customHook/cart/delete-all-user-cart-hook";
import ApplayCouponCartHook from "../../customHook/cart/applay-coupon-cart-hook";
import { useNavigate } from "react-router-dom";
const CartCheckout = ({
  productItems,
  totalAfterDiscount,
  couponNameResponse,
}) => {
  const navigate = useNavigate();
  const [clearAllUserCartHandler] = DeleteAllUserCartHook();
  const [applayCouponCartHandler, coupon, handelOnChangeCoupon] =
    ApplayCouponCartHook();

  useEffect(() => {
    if (couponNameResponse) {
      handelOnChangeCoupon(couponNameResponse);
    }
  }, [couponNameResponse]);

  const handelCheckout = () => {
    if (productItems.totalCartPrice === 0) {
      alert("عربة التسوق فارغة");
      navigate("/");
    }

    if (productItems.totalCartPrice >= 1) {
      navigate("/order/paymethoud");
    }
  };

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

        <button
          className="product-cart-add w-100 px-2"
          onClick={handelCheckout}
        >
          {" "}
          اتمام الشراء
        </button>

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
