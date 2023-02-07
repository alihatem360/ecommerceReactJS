import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserWishList } from "../../redux/actions/wishListAction";

const CardContainerHook = () => {
  const dispatch = useDispatch();
  const [favItem, setFavItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userFavList, setUserFavList] = useState([]);
  // get user wish list when component mount
  useEffect(() => {
    setLoading(true);
    const getWishList = async () => {
      await dispatch(getUserWishList());
    };
    getWishList();
    setLoading(false);
  }, []);

  // get user wish list from redux
  const wishList = useSelector((state) => state.wishListReducer.userWishList);

  useEffect(() => {
    if (!loading) {
      if (wishList.data) {
        if (wishList.data.status === "fail") {
          console.log(wishList.data.message, "wishList.data.message");
        }
        if (wishList.data.status === "success") {
          // stor only id of favorite items in array
          setFavItem(wishList.data.data.map((item) => item._id));
          setUserFavList(wishList.data.data);
        }
      }
    }
  }, [wishList]);

  return [favItem, userFavList];
};

export default CardContainerHook;
