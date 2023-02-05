import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteReview } from "../../redux/actions/reviewAction";
const DeleteReviewHook = (item) => {
  const dispatch = useDispatch();
  //  show modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  check if product deleted
  const [loading, setLoading] = useState(false);

  //  handel delete product
  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteReview(item._id));
    handleClose();
    setLoading(false);
  };

  const reriewResponse = useSelector(
    (state) => state.reviewReducer.deletedReview
  );

  // if (reriewResponse !== null) {
  //   console.log(reriewResponse, "reriewResponse");
  // }

  useEffect(() => {
    if (reriewResponse.status === 204 || reriewResponse === "") {
      console.log("تم حذف التقييم بنجاح");
      window.location.reload();
    }
  }, [reriewResponse]);

  return [
    show,
    setShow,
    handleClose,
    handleShow,
    loading,
    setLoading,
    handelDelete,
    reriewResponse,
  ];
};

export default DeleteReviewHook;
