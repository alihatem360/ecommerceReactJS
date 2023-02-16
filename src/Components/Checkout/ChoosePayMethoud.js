import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GetAllAddressHook from "../../customHook/user/get-all-address-hook";
import OrderPayCashHook from "../../customHook/checkout/order-pay-cash-hook";
import OrderPayCardHook from "../../customHook/checkout/order-pay-card-hook";
const ChoosePayMethoud = () => {
  const [address, loading] = GetAllAddressHook();
  const [handelChangeAddress, handelCreateOrderCash, selectedAddress] =
    OrderPayCashHook();
  const [paymentType, setPaymentType] = React.useState("");
  const [handelCreateOrderCARD] = OrderPayCardHook(selectedAddress);
  const handelPaymentMetode = (e) => {
    setPaymentType(e.target.value);
  };

  const paymentMetode = () => {
    if (paymentType === "CASH") {
      handelCreateOrderCash();
    } else if (paymentType === "CARD") {
      handelCreateOrderCARD();
    } else {
      alert("اختر طريقة الدفع");
    }
  };
  return (
    <div>
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
      <div className="user-address-card my-3 p-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-4">
            <input
              onChange={handelPaymentMetode}
              name="group"
              id="group1"
              type="radio"
              value="CARD"
              className="mt-2"
            />
            <label
              className="mx-2"
              for="group1"
              style={{
                cursor: "pointer",
              }}
            >
              الدفع عن طريق الفيزا
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="12" className="d-flex">
            <input
              onChange={handelPaymentMetode}
              name="group"
              id="group2"
              type="radio"
              value="CASH"
              className=""
            />
            <label
              className="mx-2"
              for="group2"
              style={{
                cursor: "pointer",
              }}
            >
              الدفع عند الاستلام
            </label>
          </Col>
        </Row>

        <Row className="my-2">
          <Col xs="6" className="d-flex">
            <select
              name="address"
              id="lang"
              style={{
                cursor: "pointer",
              }}
              className="select mt-2 px-2 "
              onChange={handelChangeAddress}
            >
              <option value="0">اختر عنوان الاستلام</option>
              {address &&
                address.data &&
                address.data.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.alias}
                  </option>
                ))}
            </select>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">34000 جنية</div>
          <div
            className="product-cart-add px-3 pt-2 d-inline me-2"
            onClick={paymentMetode}
          >
            {" "}
            اتمام الشراء
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePayMethoud;
