import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import prod1 from "../../images/prod1.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteProduct } from "../../redux/actions/producAction";
import { useDispatch } from "react-redux";

const AdminAllProducsCard = ({ product }) => {
  //  show modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  check if product deleted
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  //  handel delete product
  const handelDelete = async () => {
    setShow(true);
    await dispatch(deleteProduct(product._id));
    setShow(false);
    setLoading(false);
    console.log("item deleted successfully");
    window.location.reload();
  };

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">حذف المنتج</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من حذف المنتج ؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} className={"font"}>
            الغاء
          </Button>

          <Button variant="dark" onClick={handelDelete} className={"font"}>
            تاكيد
          </Button>
        </Modal.Footer>
      </Modal>

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit" onClick={handleShow}>
              حذف
            </div>
            <Link
              to={`/admin/editproducts/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link
          to={product._id ? `/products/${product._id}` : `/products/1`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={product.imageCover ? product.imageCover : prod1}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
                {product.title ? product.title : "اسم المنتج"}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">
                  {product.ratingsQuantity ? product.ratingsQuantity : "0"}
                </div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">
                    {product.priceAfterDiscount ? (
                      <div className="d-flex">
                        <div
                          className="card-price-discount"
                          style={{
                            textDecoration: "line-through",
                            color: "#BDBDBD",
                          }}
                        >
                          {product.price ? product.price : "0"}
                        </div>
                        <div className="card-price-after-discount">
                          ...
                          {product.priceAfterDiscount ? (
                            product.priceAfterDiscount
                          ) : (
                            <div>0</div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>{product.price ? product.price : "0"}</div>
                    )}
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProducsCard;
