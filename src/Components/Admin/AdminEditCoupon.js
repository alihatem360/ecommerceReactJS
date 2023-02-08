import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import AddCouponHook from "../../customHook/coupon/add-coupon-hook";
import EditCouponHook from "../../customHook/coupon/edit-coupon-hook";
const AdminEditCoupon = () => {
  const dataRef = useRef();
  const [
    newCouponName,
    newCouponDiscount,
    newCouponExpiry,
    handelNewCouponName,
    handelNewCouponDiscount,
    handelNewCouponExpiry,
    handelSubmit,
  ] = EditCouponHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">تعديل كوبون</div>
        <Col sm="8">
          <input
            value={newCouponName}
            onChange={handelNewCouponName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
          />
          <input
            value={newCouponExpiry}
            onChange={handelNewCouponExpiry}
            ref={dataRef}
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ الانتهاء"
            onFocus={() => (dataRef.current.type = "date")}
            onBlur={() => (dataRef.current.type = "text")}
          />
          <input
            value={newCouponDiscount}
            onChange={handelNewCouponDiscount}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="نسبة الخصم"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
    </div>
  );
};
export default AdminEditCoupon;
