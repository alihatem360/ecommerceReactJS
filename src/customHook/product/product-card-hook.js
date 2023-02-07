import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../../redux/actions/wishListAction";

const ProductCardHook = (product, favItem) => {
  const dispatch = useDispatch();
  const [favCliched, setFavCliched] = useState(false);
  const [loading, setLoading] = useState(false);

  // get token from local storage
  const token = localStorage.getItem("token");
  const handelAddToWishList = () => {
    // =================== check if user is logged in ===================
    if (token !== null) {
      // =================== add to wish list ===================
      if (!favCliched) {
        dispatch(
          addToWishList({
            productId: product._id,
          })
        );
        setFavCliched(!favCliched);
      }
      // =================== remove from wish list ===================
      if (favCliched) {
        dispatch(removeFromWishList(product._id));
        setFavCliched(!favCliched);
      }
    } else {
      alert("يجب تسجيل الدخول اولا");
    }
  };

  // =================== check if product is in wish list ===================
  useEffect(() => {
    if (token !== null && favItem.includes(product._id)) {
      setFavCliched(true);
    } else {
      setFavCliched(false);
    }
  }, [favItem]);

  const wishList = useSelector((state) => state.wishListReducer.wishList);
  const removedWishList = useSelector(
    (state) => state.wishListReducer.removedWishList
  );

  useEffect(() => {
    if (wishList.data !== null) {
      console.log("تم اضافة المنتج الى قائمة المفضلة بنجاح");
    }
    if (removedWishList.status === "success") {
      console.log("تم حذف المنتج من قائمة المفضلة بنجاح");
    }
  }, [wishList, removedWishList]);

  return [favCliched, handelAddToWishList];
};

export default ProductCardHook;
