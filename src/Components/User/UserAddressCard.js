import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/editIcon.png";
import DeleteAddressHook from "../../customHook/user/delete-address-hook";
const UserAddressCard = ({ item }) => {
  const [
    show,
    setShow,
    handleClose,
    handleShow,
    loading,
    setLoading,
    handelDelete,
  ] = DeleteAddressHook(item);
  return (
    <div className="user-address-card my-3">
      {
        //  modal for delete address
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">حذف العنوان</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من حذف العنوان؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} className={"font"}>
            الغاء
          </Button>

          <Button
            variant="dark"
            className={"font bg-danger"}
            onClick={handelDelete}
          >
            تاكيد
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="d-flex justify-content-between">
        <Col xs="1">
          <div className="p-2">المنزل :{item.alias}</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div
              className="d-flex mx-2"
              style={{
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <img
                alt=""
                className="ms-1 mt-2"
                src={editicon}
                height="17px"
                width="15px"
              />
              <Link
                to={`/user/edit-address/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <p className="item-delete-edit"> تعديل</p>
              </Link>
            </div>
            <div
              className="d-flex "
              style={{
                cursor: "pointer",
              }}
              onClick={handleShow}
            >
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
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
          >
            {item.details}
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
            {item.phone}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
