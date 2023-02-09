import { useState } from "react";
import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/editIcon.png";
import { Modal, Button } from "react-bootstrap";
import DeleteCouponHook from "../../customHook/coupon/delete-coupon-hook";
const AdminCouponCard = ({ coupon }) => {
  const [
    show,
    setShow,
    handleClose,
    handleShow,
    loading,
    setLoading,
    handelDelete,
  ] = DeleteCouponHook(coupon);

  return (
    <div className="user-address-card my-3">
      {
        //  modal for delete coupon
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">حذف الكوبون</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من حذف الكوبون ؟😢</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} className={"font"}>
            الغاء
          </Button>

          <Button variant="dark" className={"font"} onClick={handelDelete}>
            تاكيد
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="d-flex justify-content-between">
        <Col xs="6">
          <div className="p-2">اسم الكوبون :{coupon.name}</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2" style={{ cursor: "pointer" }}>
              <img
                alt=""
                className="ms-1 mt-2"
                src={editicon}
                height="17px"
                width="15px"
              />
              <Link
                to={`/admin/edit-coupon/${coupon._id}`}
                style={{ textDecoration: "none" }}
              >
                <p
                  className="item-delete-edit"
                  style={{ color: "#20262E", fontWeight: "bold" }}
                >
                  {" "}
                  تعديل
                </p>
              </Link>
            </div>
            <div
              className="d-flex "
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
                onClick={handleShow}
              />
              <p className="item-delete-edit" style={{ color: "#F44336" }}>
                {" "}
                ازاله
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
            f
          >
            تاريخ الانتهاء : {coupon.expire.split("T")[0]}
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            نسبة الخصم :
          </div>

          <div
            style={{
              color: "#20262E",
              fontFamily: "Almarai",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            className="mx-2"
          >
            {coupon.discount}% 🎉
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCouponCard;
