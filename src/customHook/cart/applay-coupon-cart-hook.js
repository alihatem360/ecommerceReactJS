import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applayCouponCart } from "../../redux/actions/cartAction";

const ApplayCouponCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState("");

  const handelOnChangeCoupon = (e) => {
    setCoupon(e);
  };

  const applayCouponCartHandler = async () => {
    if (coupon === "") {
      console.log("من فضلك ادخل كود الكوبون");
      return;
    }
    setLoading(true);
    try {
      await dispatch(
        applayCouponCart({
          couponName: coupon,
        })
      );
    } catch (error) {
      console.log("هذا الكود غير صحيح او منتهي الصلاحيه" + error);
    }
    setLoading(false);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  //   get response after applay coupon cart
  const applayCouponCartResponse = useSelector(
    (state) => state.cartReducer.applayCoupon
  );

  useEffect(() => {
    if (!loading) {
      if (applayCouponCartResponse.status === "success") {
        console.log("تم تطبيق الكوبون بنجاح");
      }
    }
  }, [applayCouponCartResponse, loading]);

  return [applayCouponCartHandler, coupon, handelOnChangeCoupon];
};
export default ApplayCouponCartHook;
