import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDeleteAddress } from "../../redux/actions/userAction";
const DeleteAddressHook = (item) => {
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
    await dispatch(userDeleteAddress(item._id));
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

export default DeleteAddressHook;
