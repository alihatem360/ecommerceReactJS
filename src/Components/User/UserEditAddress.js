import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import EditAddressHook from "../../customHook/user/edit-address-hook";
const UserEditAddress = () => {
  const [
    newAlias,
    handelNewAlias,
    newDetails,
    handelNewDetails,
    newPhone,
    handelNewPhone,
    handelSubmit,
    loading,
    setLoading,
    editAddressResult,
  ] = EditAddressHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">تعديل العنوان </div>
        <Col sm="8">
          <input
            value={newAlias}
            onChange={handelNewAlias}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />
          <textarea
            value={newDetails}
            onChange={handelNewDetails}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
          />
          <input
            value={newPhone}
            onChange={handelNewPhone}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>
            حفظ تعديل العنوان
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default UserEditAddress;
