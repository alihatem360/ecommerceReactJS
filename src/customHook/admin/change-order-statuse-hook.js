import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeOrderStatusPaid } from "../../redux/actions/orderAction";
import { changeOrderStatusDlivered } from "../../redux/actions/orderAction";
const ChangeOrderStatusHook = (id) => {
  const dispatch = useDispatch();
  const [paid, setPaid] = useState(0);
  const [deliver, setDeliver] = useState(0);
  const [loading, setLoading] = useState(false);
  const [deliverLoading, setDeliverLoading] = useState(false);

  const onChangeStatusPaid = (e) => {
    console.log(e.target.value, "e.target.value");
    setPaid(e.target.value);
  };

  const onChangeStatusDriver = (e) => {
    console.log(e.target.value, "e.target.value");
    setDeliver(e.target.value);
  };

  const submitStatusPaid = async (e) => {
    if (paid === "0") {
      console.log("من فضلك اختر الحالة");
      return;
    }
    if (paid === "true") {
      e.preventDefault();
      setLoading(true);
      await dispatch(changeOrderStatusPaid(id));
      setLoading(false);
    }
  };

  const submitStatusDlivered = async (e) => {
    if (deliver === "0") {
      console.log("من فضلك اختر الحالة");
      return;
    }
    if (deliver === "true") {
      e.preventDefault();
      setDeliverLoading(true);
      await dispatch(changeOrderStatusDlivered(id));
      setDeliverLoading(false);
    }
  };

  //   get respons from after submit
  const orderPaidRespons = useSelector(
    (state) => state.orderReducer.changePayStatus
  );

  // get respons from after submit

  const orderDeliverRespons = useSelector(
    (state) => state.orderReducer.changeDeliveredStatus
  );

  useEffect(() => {
    if (!loading) {
      if (orderPaidRespons.status === "Success") {
        console.log("تم تغيير حالة الدفع بنجاح");
        window.location.reload();
      }
    }
  }, [loading, orderPaidRespons]);

  useEffect(() => {
    if (!deliverLoading) {
      if (orderDeliverRespons.status === "Success") {
        console.log("تم تغيير حالة التوصيل بنجاح");
        window.location.reload();
      }
    }
  }, [deliverLoading, orderDeliverRespons]);
  return [
    onChangeStatusPaid,
    submitStatusPaid,
    onChangeStatusDriver,
    submitStatusDlivered,
  ];
};

export default ChangeOrderStatusHook;
