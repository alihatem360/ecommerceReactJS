import React from "react";
import { Col, Spinner } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminCouponCard from "./AdminCouponCard";
import GetAllCouponHook from "../../customHook/coupon/get-all-coupon-hooh";
const AdminAllCoupon = () => {
  const [coupon, loading] = GetAllCouponHook();

  return (
    <div>
      <Row className="">
        <Col lg="12" className="d-flex justify-content-between">
          <div className="admin-content-text">
            كوبونات الخصم : {coupon.data ? coupon.data.length : 0} كوبون
          </div>
        </Col>
        {coupon.data ? (
          coupon.data.map((item) => {
            return <AdminCouponCard coupon={item} key={item.id} />;
          })
        ) : (
          <Row className="justify-content-center">
            <h1 className="text-center">جاري التحميل الكوبونات</h1>
            <Spinner animation="border" variant="primary" />
          </Row>
        )}
      </Row>
    </div>
  );
};

export default AdminAllCoupon;
