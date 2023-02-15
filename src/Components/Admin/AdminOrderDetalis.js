import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import GetOneOrderHook from "../../customHook/admin/get-one-order-hook";
import UserAllOrdersItem from "../User/UserAllOrdersItem";
import { useParams } from "react-router-dom";
import ChangeOrderStatusHook from "../../customHook/admin/change-order-statuse-hook";
const AdminOrderDetalis = () => {
  const { id } = useParams();
  const [order, cartItems] = GetOneOrderHook(id);

  const [
    onChangeStatusPaid,
    submitStatusPaid,
    onChangeStatusDriver,
    submitStatusDlivered,
  ] = ChangeOrderStatusHook(id);
  return (
    <div>
      <UserAllOrdersItem orderItem={order} />

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الاسم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {order && order.user && order.user.name}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {order && order.user && order.user.phone}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الايميل:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {order && order.user && order.user.email}
          </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
          المجموع ..{order && order.totalOrderPrice} ريال
        </div>
        {
          // حالة الدفع
        }
        <div className="d-flex mt-2 justify-content-center">
          <div className="d-flex mt-2 justify-content-center">
            <select
              name="paid"
              id="paid"
              className="select input-form-area m-1  text-center  w-100"
              onChange={onChangeStatusPaid}
            >
              <option value="0">حالة الدفع</option>
              <option value="true">تم الدفع</option>
              <option value="false">لم يتم الدفع</option>
            </select>
            <button
              className="btn-a px-3 d-inline mx-2 "
              onClick={submitStatusPaid}
            >
              حفظ{" "}
            </button>
          </div>
          <div className="d-flex mt-2 justify-content-center">
            <select
              name="delivery"
              id="delivery"
              className="select input-form-area m-1  text-center  w-100"
              onChange={onChangeStatusDriver}
            >
              <option value="0">حالة توصيل</option>
              <option value="true">تم التوصيل</option>
              <option value="false"> لم يتم التوصيل</option>
            </select>
            <button
              className="btn-a px-3 d-inline mx-2 "
              onClick={submitStatusDlivered}
            >
              حفظ{" "}
            </button>
          </div>
        </div>
        {
          // حالة الشحن
        }
      </Row>
    </div>
  );
};

export default AdminOrderDetalis;
