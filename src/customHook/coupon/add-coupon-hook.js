import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCoupon } from "../../redux/actions/couponAction";
const AddCouponHook = (props) => {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const [couponExpiry, setCouponExpiry] = useState("");
  const [couponDiscount, setCouponDiscount] = useState("");
  const [loading, setLoading] = useState(false);
  const handelCouponName = (e) => {
    setCouponName(e.target.value.toUpperCase());
  };
  const handelCouponExpiry = (e) => {
    setCouponExpiry(e.target.value);
  };
  const handelCouponDiscount = (e) => {
    setCouponDiscount(e.target.value);
  };

  //   clear form after submit
  const clearForm = () => {
    setCouponName("");
    setCouponExpiry("");
    setCouponDiscount("");
  };

  const handelSubmit = async (e) => {
    if (
      couponName === "" ||
      couponExpiry === "" ||
      couponDiscount === "" ||
      parseInt(couponDiscount) > 100 ||
      parseInt(couponDiscount) < 1
    ) {
      console.log("من فضلك ادخل جميع البيانات");
      return;
    }
    e.preventDefault();
    await dispatch(
      createCoupon({
        name: couponName,
        expire: couponExpiry,
        discount: couponDiscount,
      })
    );
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    clearForm();
    window.location.reload();
  };

  const couponRespons = useSelector((state) => state.couponReducer.newCoupon);

  useEffect(() => {
    if (!loading) {
      if (couponRespons.data) {
        if (couponRespons.data.status === "error") {
          console.log("هناك خطأ في اضافة الكوبون");
        }
        if (!couponRespons.data.status) {
          console.log("تم اضافة الكوبون بنجاح");
        }
        if (couponRespons.status === 400) {
          console.log("تم اضافة الكوبون من قبل");
        }
      }
    }
  }, [couponRespons, loading]);

  return [
    handelCouponName,
    handelCouponExpiry,
    handelCouponDiscount,
    handelSubmit,
    loading,
    couponName,
    couponExpiry,
    couponDiscount,
  ];
};

export default AddCouponHook;
