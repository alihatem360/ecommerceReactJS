import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCoupon } from "../../redux/actions/couponAction";
const DeleteCouponHook = (item) => {
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
    await dispatch(deleteCoupon(item._id));
    handleClose();
    setLoading(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return [
    show,
    setShow,
    handleClose,
    handleShow,
    loading,
    setLoading,
    handelDelete,
  ];
};

export default DeleteCouponHook;
