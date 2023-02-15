import React from "react";
import { Col, Row } from "react-bootstrap";
import UserAllOrderCard from "./UserAllOrderCard";

const UserAllOrdersItem = ({ orderItem }) => {
  return (
    <div className="user-order my-2 py-2">
      <Row>
        <div className="py-2 order-title">طلب رقم # {orderItem.id}</div>
        <div className="py-2 order-title">
          {" "}
          ت بتاريخ{" "}
          {orderItem.createdAt ? orderItem.createdAt.split("T")[0] : ""}
        </div>
      </Row>
      {orderItem.cartItems &&
        orderItem.cartItems.map((item, index) => (
          <UserAllOrderCard key={index} item={item} />
        ))}
      <Row className="py-2">
        <Col xs="9" className="d-flex justify-content-start">
          <div className="d-inline">
            <div className="d-inline">التوصيل</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isDelivered === false ? "لم يتم ❌" : "تم ✅"}
            </div>
          </div>
          <div className="d-inline ">
            <div className="d-inline">الدفع</div>
            <div className="d-inline mx-2 stat font-weight-bold font-size-20">
              {orderItem.isPaid === false ? "لم يتم ❌" : "تم ✅"}
            </div>
          </div>
          <div className="d-inline ">
            <div className="d-inline">طريقة الدفع</div>
            <div className="d-inline mx-2 stat">
              {orderItem.paymentMethodType === "cash" ? "كاش 💰" : "بطاقة 💳"}
            </div>
          </div>
        </Col>
        <Col xs="3" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{orderItem.totalOrderPrice} ريال</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrdersItem;
