import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCoupon } from "../../redux/actions/couponAction";
const GetAllCouponHook = () => {
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCoupon = async () => {
      await dispatch(getAllCoupon());
    };
    getCoupon();
    setLoading(false);
  }, []);

  const couponList = useSelector((state) => state.couponReducer.allCoupon);

  useEffect(() => {
    if (!loading) {
      if (couponList.data) {
        if (couponList.status === 200) {
          console.log("تم جلب الكوبونات بنجاح");
          setCoupon(couponList.data);
        }
      }
    }
  }, [couponList, loading]);

  return [coupon, loading];
};

export default GetAllCouponHook;
