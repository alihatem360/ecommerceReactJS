import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import deletIcon from "../../images/delete.png";
import editIcon from "../../images/editIcon.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteReviewHook from "../../customHook/review/delete-review-hook";
import EditeReviewHook from "../../customHook/review/edite-review-hooh";
import { useSelector, useDispatch } from "react-redux";
import { deleteReview } from "../../redux/actions/reviewAction";
import ReactStars from "react-rating-stars-component";

const RateItem = ({ item }) => {
  const dispatch = useDispatch();
  let user = "";
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  // console.log(item, "item from rate item");

  const [
    show,
    setShow,
    handleClose,
    handleShow,
    loading,
    setLoading,
    handelDelete,
    reriewResponse,
  ] = DeleteReviewHook(item);

  const [
    showEdite,
    handleCloseEdite,
    handleShowEdite,
    handelEdite,
    newRateText,
    handelNewRateText,
    newRate,
    handelNewRate,
  ] = EditeReviewHook(item);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: item.rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      handelNewRate(newValue);
    },
  };
  return (
    <div>
      {
        // ================== delete modal ==================
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">حذف التقييم</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من حذف التقييم</div>
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

      {
        //  ==================  edit modal ==================
      }
      <Modal show={showEdite} onHide={handleCloseEdite}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تعديل التقييم</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="تعديل التقييم"
            value={newRateText}
            onChange={handelNewRateText}
          />
          <ReactStars {...setting} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleCloseEdite}
            className={"font"}
          >
            الغاء
          </Button>

          <Button variant="dark" className={"font"} onClick={handelEdite}>
            تاكيد التعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className="rate-name  d-inline ms-2">{item.user.name}</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{item.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2 justify-content-space-between">
          <div className="rate-description d-inline ms-2">{item.review}</div>
          {
            // display edit and delete icons if user is the owner of the review
          }
          {user._id === item.user._id && (
            <div className="d-inline d-flex justify-content-end">
              <img
                src={deletIcon}
                alt="deleteIcon"
                height="25px"
                width="25px"
                className=""
                onClick={handleShow}
                style={{ cursor: "pointer" }}
              />
              <img
                src={editIcon}
                alt="editIcon"
                height="25px"
                width="25px"
                className="mx-2"
                style={{ cursor: "pointer" }}
                onClick={handleShowEdite}
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default RateItem;
