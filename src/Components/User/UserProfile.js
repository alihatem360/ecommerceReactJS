import React from "react";
import { Row, Col } from "react-bootstrap";
import editicon from "../../images/editIcon.png";
import { Modal, Button } from "react-bootstrap";
import UserProfileHook from "../../customHook/user/user-profile-hook";
const UserProfile = () => {
  const [
    show,
    handleClose,
    handleShow,
    handelUpdate,
    handelnameChange,
    handelphoneChange,
    handelEmailChange,
    name,
    phone,
    email,
    handelUpdatePassword,
    handelOldPasswordChange,
    handelNewPasswordChange,
    handelConfirmPasswordChange,
    oldPassword,
    newPassword,
    confirmPassword,
  ] = UserProfileHook();

  return (
    <div>
      {
        //  modal for delete address
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تعديل البيانات</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من تعديل البيانات؟</div>
          <input
            type="text"
            className="form-control"
            placeholder="الاسم"
            value={name}
            onChange={handelnameChange}
          />

          <input
            type="text"
            className="form-control"
            placeholder="الهاتف"
            value={phone}
            onChange={handelphoneChange}
          />

          <input
            type="text"
            className="form-control"
            placeholder="البريد الالكتروني"
            value={email}
            onChange={handelEmailChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} className={"font"}>
            الغاء
          </Button>

          <Button
            variant="dark"
            className={"font bg-danger"}
            onClick={handelUpdate}
          >
            تاكيد
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="admin-content-text">الصفحه الشخصية</div>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">الاسم:</div>
            <div className="p-1 item-delete-edit">{name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div
              className="d-flex mx-2"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              <img
                alt=""
                className="ms-1 mt-2"
                src={editicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> تعديل</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">{phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور</div>
            <input
              value={oldPassword}
              onChange={handelOldPasswordChange}
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="ادخل كلمة المرور القديمة"
            />
            <input
              value={newPassword}
              onChange={handelNewPasswordChange}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="ادخل كلمة المرور الجديده"
            />
            <input
              value={confirmPassword}
              onChange={handelConfirmPasswordChange}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="تاكيد كلمة المرور الجديده"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              className="btn-save d-inline mt-2 "
              onClick={handelUpdatePassword}
            >
              حفظ كلمة السر
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserProfile;
