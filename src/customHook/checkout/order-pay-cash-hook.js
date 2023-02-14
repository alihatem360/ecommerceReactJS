import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpecificAddress } from "../../redux/actions/userAction";
import GetAllUserCartHook from ".././cart/get-all-user-cart-hook";
import { createCashOrder } from "../../redux/actions/checkoutAction";
const OrderPayCashHook = () => {
  const [, , , , cartID] = GetAllUserCartHook();
  const dispatch = useDispatch();
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const handelChangeAddress = (e) => {
    setAddress([]);
    if (e.target.value !== "0") {
      getAddress(e.target.value);
    }
  };
  // get specific address related to user
  const getAddress = async (ID) => {
    console.log(ID, "ID");
    await dispatch(getSpecificAddress(ID));
  };

  //  get address from redux
  const addressOne = useSelector(
    (state) => state.userReducer.getSpecificAddress
  );

  // if (addressOne.data) {
  //   console.log(addressOne.data, "addressOne.data");
  // }

  // خزن العنوان اللي اليوزر اختاره
  useEffect(() => {
    if (addressOne.data) {
      if (addressOne.data.status === "success") {
        setAddress(addressOne.data.data);
      }
    }
  }, [addressOne.data]);

  const handelCreateOrderCash = async () => {
    if (
      cartID === null ||
      cartID === undefined ||
      cartID === "" ||
      cartID === 0
    ) {
      return alert("السلة فارغة");
    }
    setLoading(true);
    await dispatch(
      createCashOrder(cartID, {
        shippingAddress: {
          details: address.details,
          phone: address.phone,
          city: "Cairo",
          postalCode: "41516",
        },
      })
    );
    setLoading(false);
  };

  // get  response after create order
  const createCashOrderResponse = useSelector(
    (state) => state.checkoutReducer.cashOrder
  );

  // if (createCashOrderResponse) {
  //   console.log(createCashOrderResponse, "createCashOrderResponse.data");
  // }

  useEffect(() => {
    if (!loading) {
      if (createCashOrderResponse.data) {
        if (createCashOrderResponse.status === "success") {
          alert("تم انشاء الطلب بنجاح");
          setTimeout(() => {
            window.location.href = "/user/allOrders";
          }, 1000);
        }
      }
    }
  }, [createCashOrderResponse, loading]);
  return [handelChangeAddress, handelCreateOrderCash];
};

export default OrderPayCashHook;
