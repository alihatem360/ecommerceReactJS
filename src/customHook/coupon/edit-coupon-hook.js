import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editCoupon } from "../../redux/actions/couponAction";
import { getSpecificCoupon } from "../../redux/actions/couponAction";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditCouponHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Item = useParams();
  //   dispatch(getSpecificCoupon(Item.id)) to get specific coupon
  useEffect(() => {
    const getCoupon = async () => {
      await dispatch(getSpecificCoupon(Item.id));
    };
    getCoupon();
  }, []);

  // new state
  const [newCouponName, setNewCouponName] = useState("");
  const [newCouponDiscount, setNewCouponDiscount] = useState("");
  const [newCouponExpiry, setNewCouponExpiry] = useState("");
  const [loading, setLoading] = useState(false);

  //  get specific coupon
  const couponOne = useSelector((state) => state.couponReducer.specificCoupon);

  //   update coupon with new data
  useEffect(() => {
    if (couponOne.data) {
      if (couponOne.data.data) {
        setNewCouponName(couponOne.data.data.name);
        setNewCouponDiscount(couponOne.data.data.discount);
        setNewCouponExpiry(couponOne.data.data.expire.split("T")[0]);
      }
    }
  }, [couponOne.data]);

  const handelNewCouponName = (e) => {
    setNewCouponName(e.target.value.toUpperCase());
  };
  const handelNewCouponDiscount = (e) => {
    setNewCouponDiscount(e.target.value);
  };

  const handelNewCouponExpiry = (e) => {
    setNewCouponExpiry(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      newCouponName === "" ||
      newCouponExpiry === "" ||
      newCouponDiscount === "" ||
      parseInt(newCouponDiscount) > 100 ||
      parseInt(newCouponDiscount) < 0
    ) {
      console.log("من فضلك ادخل جميع البيانات");
      return;
    }
    setLoading(true);
    await dispatch(
      editCoupon(Item.id, {
        name: newCouponName,
        expire: newCouponExpiry,
        discount: newCouponDiscount,
      })
    );
    setLoading(false);
    navigate("/admin/addCoupon");
  };

  //   return result when update coupon
  const editCouponResult = useSelector(
    (state) => state.couponReducer.editCoupon
  );

  useEffect(() => {
    if (!loading) {
      if (editCouponResult.data) {
        console.log("تم تعديل الكوبون بنجاح");
      }
    }
  }, [editCouponResult, loading]);
  return [
    newCouponName,
    newCouponDiscount,
    newCouponExpiry,
    handelNewCouponName,
    handelNewCouponDiscount,
    handelNewCouponExpiry,
    handelSubmit,
  ];
};

export default EditCouponHook;
