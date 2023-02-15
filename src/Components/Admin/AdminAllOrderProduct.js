import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../images/mobile.png";
const AdminAllOrderProduct = ({ orderItem }) => {
  return (
    <Col sm="12">
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="cart-item-body-admin my-2 px-1 d-flex px-2"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">
                طلب رقم #{orderItem.id}
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                طلب من.. {orderItem.user.name || ""}
              </div>
              <div
                style={{ color: "black" }}
                className="d-inline pt-2 cat-rate me-2 font-weight-bold text-warning"
              >
                {" "}
                {orderItem.user.email || ""}
              </div>
            </Col>
          </Row>

          <Row className="py-2">
            <Col xs="9" className="d-flex justify-content-start">
              <div className="d-inline">
                <div className="d-inline">التوصيل</div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isDelivered === false ? "لم يتم " : "تم "}
                </div>
              </div>
              <div className="d-inline ">
                <div className="d-inline">الدفع</div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isDelivered === false ? "لم يتم " : "تم "}
                </div>
              </div>
              <div className="d-inline ">
                <div className="d-inline">طريقة الدفع</div>
                <div className="d-inline mx-2 stat">
                  {orderItem.paymentMethodType === "cash" ? "كاش" : "بطاقة"}
                </div>
              </div>
            </Col>
            <Col xs="3" className="d-flex justify-content-end">
              <div>
                <div className="barnd-text">
                  {orderItem.totalOrderPrice} ريال
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrderProduct;
