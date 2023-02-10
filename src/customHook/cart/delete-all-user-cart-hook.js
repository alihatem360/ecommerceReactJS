import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUserCart } from "../../redux/actions/cartAction";
import { deleteCartItem } from "../../redux/actions/cartAction";
const DeleteAllUserCartHook = (itemId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  //  show modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   handel clear all user cart
  const clearAllUserCartHandler = async () => {
    setLoading(true);
    await dispatch(clearAllUserCart());
    setLoading(false);
  };

  //  handel delete cart item
  const deleteCartItemHandler = async () => {
    console.log("تم حذف العنصر من السلة بنجاح");
    setLoading(true);
    await dispatch(deleteCartItem(itemId));
    setLoading(false);
    handleClose();
  };

  // get data after clear all user cart
  const userCartResponse = useSelector((state) => state.cartReducer.clearCart);

  //   get data after delete cart item
  const deleteCartItemResponse = useSelector(
    (state) => state.cartReducer.deleteCartItem
  );

  useEffect(() => {
    if (!loading) {
      if (deleteCartItemResponse.status === "success") {
        console.log("تم حذف العنصر من السلة بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  }, [deleteCartItemResponse, loading]);

  useEffect(() => {
    if (!loading) {
      if (userCartResponse === "") {
        console.log("تم حذف السلة بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    }
  }, [userCartResponse, loading]);

  return [
    clearAllUserCartHandler,
    deleteCartItemHandler,
    show,
    setShow,
    handleClose,
    handleShow,
    loading,
    setLoading,
  ];
};

export default DeleteAllUserCartHook;
