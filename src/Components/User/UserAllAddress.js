import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import GetAllAddressHook from "../../customHook/user/get-all-address-hook";
import { Spinner } from "react-bootstrap";
const UserAllAddress = () => {
  const [address, loading] = GetAllAddressHook();
  return (
    <div>
      <Row className="">
        <div className="admin-content-text">دفتر العنوانين</div>
        {address.data ? (
          address.data.map((item) => (
            <UserAddressCard item={item} key={item._id} />
          ))
        ) : (
          <Row className="justify-content-center">
            <h1 className="text-center">جاري تحميل العنوانين</h1>
            <Spinner animation="border" variant="primary" className="mb-5" />
          </Row>
        )}

        <Row className="justify-content-center">
          <Col sm="5" className="d-flex justify-content-center">
            <Link to="/user/add-address" style={{ textDecoration: "none" }}>
              <button className="btn-add-address">اضافه عنوان جديد</button>
            </Link>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default UserAllAddress;
