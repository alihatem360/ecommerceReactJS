import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpecificAddress } from "../../redux/actions/userAction";
import GetAllUserCartHook from ".././cart/get-all-user-cart-hook";
const OrderPayCashHook = () => {
  const [, , , , cartID] = GetAllUserCartHook();
  const dispatch = useDispatch();
  const [address, setAddress] = useState([]);

  const handelChangeAddress = (e) => {
    setAddress([]);
    if (e.target.value !== "0") {
      getAddress(e.target.value);
    }
  };

  const getAddress = async (ID) => {
    console.log(ID, "ID");
    await dispatch(getSpecificAddress(ID));
  };

  //  get address from redux
  const addressOne = useSelector(
    (state) => state.userReducer.getSpecificAddress
  );

  if (addressOne.data) {
    console.log(addressOne.data, "addressOne.data");
  }

  useEffect(() => {
    if (addressOne.data) {
      if (addressOne.data.status === "success") {
        setAddress(addressOne.data);
      }
    }
  }, [addressOne.data]);

  return [handelChangeAddress];
};

export default OrderPayCashHook;
