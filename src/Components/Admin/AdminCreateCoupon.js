import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import AddCouponHook from "../../customHook/coupon/add-coupon-hook";
import AdminAllCoupon from "./AdminAllCoupon";
const AdminCreateCoupon = () => {
  const [
    handelCouponName,
    handelCouponExpiry,
    handelCouponDiscount,
    handelSubmit,
    loading,
    couponName,
    couponExpiry,
    couponDiscount,
  ] = AddCouponHook();
  const dataRef = useRef();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه كوبون</div>
        <Col sm="8">
          <input
            value={couponName}
            onChange={handelCouponName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
          />
          <input
            value={couponExpiry}
            onChange={handelCouponExpiry}
            ref={dataRef}
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ الانتهاء"
            onFocus={() => (dataRef.current.type = "date")}
            onBlur={() => (dataRef.current.type = "text")}
          />
          <input
            value={couponDiscount}
            onChange={handelCouponDiscount}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="نسبة الخصم"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>
            اضافة كوبون
          </button>
        </Col>
      </Row>

      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <AdminAllCoupon />
        </Col>
      </Row>
    </div>
  );
};
export default AdminCreateCoupon;
