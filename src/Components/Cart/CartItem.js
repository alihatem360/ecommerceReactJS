import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import DeleteAllUserCartHook from "../../customHook/cart/delete-all-user-cart-hook";
import UpdateCartItemHook from "../../customHook/cart/update-cart-item-hook";
const CartItem = ({ item }) => {
  const [
    clearAllUserCartHandler,
    deleteCartItemHandler,
    show,
    setShow,
    handleClose,
    handleShow,
    loading,
    setLoading,
  ] = DeleteAllUserCartHook(item._id);

  const [quantity, handelOnChangeQuantity, updateCartItemHandler] =
    UpdateCartItemHook(item);

  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      {
        //  modal for delete address
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">حذف المنتج</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من حذف المنتج من السله؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} className={"font"}>
            الغاء
          </Button>

          <Button
            variant="dark"
            className={"font bg-danger"}
            onClick={deleteCartItemHandler}
          >
            تاكيد
          </Button>
        </Modal.Footer>
      </Modal>

      <img
        className="cart-item-coverImg"
        width="160px"
        height="100%"
        src={`http://127.0.0.1:8000/products/${item.product.imageCover}`}
        alt=""
      />

      <div className="w-100">
        <Row className="justify-content-between">
          <Col
            sm="12"
            className=" d-flex flex-row justify-content-between px-4"
          >
            <div className="d-inline pt-2 cat-text">
              {item.product.category.name}
            </div>
            <div
              className="d-flex pt-2 text-danger"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              <img
                src={deleteicon}
                alt=""
                width="20px"
                height="24px"
                className="mx-1s"
              />
              <div className="cat-text d-inline text-danger font"> حذف</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">{item.product.title}</div>
            <div className="d-inline pt-2 cat-rate me-2">4.5</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
              {item.product.brand.name}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {item.color !== "yello" && (
              <>
                <span className="cat-text">اللون :</span>

                <div
                  className={`${
                    item.color === "yello" ? "" : "color ms-2 border"
                  } `}
                  style={{ backgroundColor: item.color }}
                ></div>
              </>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text  d-inline">الكميه</div>
              <input
                value={quantity}
                onChange={handelOnChangeQuantity}
                className="mx-2 "
                type="number"
                style={{ width: "46px", height: "37px" }}
              />
              <Button
                variant="dark"
                className={"font bg-dark"}
                onClick={updateCartItemHandler}
              >
                تاكيد
              </Button>
            </div>
            <div className="d-inline pt-2 barnd-text">{item.price} ريال</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
