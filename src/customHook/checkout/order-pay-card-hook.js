import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpecificAddress } from "../../redux/actions/userAction";
import GetAllUserCartHook from ".././cart/get-all-user-cart-hook";
import { createCARDOrder } from "../../redux/actions/checkoutAction";
const OrderPayCardHook = (selectedAddress) => {
  const [, , , , cartID] = GetAllUserCartHook();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handelCreateOrderCARD = async () => {
    // console.log(selectedAddress, "address");
    if (
      cartID === null ||
      cartID === undefined ||
      cartID === "" ||
      cartID === 0
    ) {
      return alert("السلة فارغة");
    }
    if (selectedAddress === null || selectedAddress === undefined) {
      return alert("الرجاء اختيار العنوان");
    }
    setLoading(true);
    await dispatch(
      createCARDOrder(cartID, {
        shippingAddress: {
          details: selectedAddress.details,
          phone: selectedAddress.phone,
          city: "Cairo",
          postalCode: "41516",
        },
      })
    );
    setLoading(false);
  };

  // get  response after create order
  const createCardOrderResponse = useSelector(
    (state) => state.checkoutReducer.cardOrder
  );

  //   if (createCardOrderResponse) {
  //     console.log(createCardOrderResponse, "createCardOrderResponse.data");
  //   }

  useEffect(() => {
    if (!loading) {
      if (createCardOrderResponse.session) {
        if (createCardOrderResponse.status === "success") {
          alert("تم انشاء الطلب بنجاح");
          setTimeout(() => {
            window.open(createCardOrderResponse.session.url, "_blank");
          }, 1000);
        }
      }
    }
  }, [createCardOrderResponse, loading]);

  return [handelCreateOrderCARD];
};

export default OrderPayCardHook;
