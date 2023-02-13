import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserCart } from "../../redux/actions/cartAction";

const GetAllUserCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [productItems, setProductItems] = useState([]);

  const [couponNameResponse, setCouponNameResponse] = useState("");
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [cartID, setCartID] = useState("");

  //   handel add to cart
  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      await dispatch(getAllUserCart());

      setLoading(false);
    };
    getdata();
  }, []);

  // get data after add to cart
  const userCart = useSelector((state) => state.cartReducer.userCart);
  // if (userCart.status === 200) {
  //   console.log("userCart.data", userCart.data);
  // }

  useEffect(() => {
    if (!loading) {
      if (userCart.data) {
        if (userCart.status === 200) {
          console.log("تم جلب السلة بنجاح");
          setNumOfCartItems(userCart.data.numOfCartItems);
          setProductItems(userCart.data.data);
          setCartID(userCart.data.data._id);
          if (userCart.data.data.coupon) {
            setCouponNameResponse(userCart.data.data.coupon);
            setTotalAfterDiscount(userCart.data.data.totalAfterDiscount);
          } else {
            setCouponNameResponse("");
            setTotalAfterDiscount(0);
          }
        }
      }
    }
  }, [userCart, loading]);

  return [
    numOfCartItems,
    productItems,
    couponNameResponse,
    totalAfterDiscount,
    cartID,
  ];
};
export default GetAllUserCartHook;
