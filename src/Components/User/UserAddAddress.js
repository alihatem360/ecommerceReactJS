import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import UserAddAddressHook from "../../customHook/user/user-add-address-hook";
const UserAddAddress = () => {
  const [
    alias,
    details,
    phone,
    handelAlias,
    handelDetails,
    handelPhone,
    handelSubmit,
  ] = UserAddAddressHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
        <Col sm="8">
          <input
            value={alias}
            onChange={handelAlias}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />
          <textarea
            value={details}
            onChange={handelDetails}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
          />
          <input
            value={phone}
            onChange={handelPhone}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>
            اضافة عنوان
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddAddress;
