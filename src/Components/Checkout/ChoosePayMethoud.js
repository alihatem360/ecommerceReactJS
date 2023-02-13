import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GetAllAddressHook from "../../customHook/user/get-all-address-hook";
import OrderPayCashHook from "../../customHook/checkout/order-pay-cash-hook";
const ChoosePayMethoud = () => {
  const [address, loading] = GetAllAddressHook();
  const [handelChangeAddress] = OrderPayCashHook();
  return (
    <div>
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
      <div className="user-address-card my-3 p-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-4">
            <input
              name="group"
              id="group1"
              type="radio"
              value="الدفع عن طريق الفيزا"
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
              name="group"
              id="group2"
              type="radio"
              value="الدفع عند الاستلام"
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
          <div className="product-cart-add px-3 pt-2 d-inline me-2">
            {" "}
            اتمام الشراء
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePayMethoud;
