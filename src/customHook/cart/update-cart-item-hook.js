import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../../redux/actions/cartAction";

const UpdateCartItemHook = (item) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.count);
  const [loading, setLoading] = useState(false);

  const handelOnChangeQuantity = (e) => {
    if (e.target.value < 1) return;
    setQuantity(e.target.value);
  };

  const updateCartItemHandler = async () => {
    setLoading(true);
    await dispatch(
      updateCartItem(item._id, {
        count: quantity,
      })
    );
    setLoading(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  //   get response after update cart item
  const updateCartItemResponse = useSelector(
    (state) => state.cartReducer.updatedCartItem
  );

  useEffect(() => {
    if (!loading) {
      if (updateCartItemResponse.status === "success") {
        console.log("تم تحديث الكميه بنجاح");
      }
    }
  }, [updateCartItemResponse, loading]);

  return [quantity, handelOnChangeQuantity, updateCartItemHandler];
};

export default UpdateCartItemHook;
