import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpecificAddress } from "../../redux/actions/userAction";
import { userUpdateAddress } from "../../redux/actions/userAction";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditAddressHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Item = useParams();

  //   dispatch(getSpecificCoupon(Item.id)) to get specific coupon
  useEffect(() => {
    const getAddress = async () => {
      await dispatch(getSpecificAddress(Item.id));
    };
    getAddress();
  }, []);

  // new state
  const [newAlias, setNewAlias] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [loading, setLoading] = useState(false);

  //  get address from redux
  const addressOne = useSelector(
    (state) => state.userReducer.getSpecificAddress
  );

  //   update coupon with new data

  useEffect(() => {
    if (addressOne.data) {
      if (addressOne.data.status === "success") {
        setNewAlias(addressOne.data.data.alias);
        setNewDetails(addressOne.data.data.details);
        setNewPhone(addressOne.data.data.phone);
      }
    }
  }, [addressOne.data]);

  const handelNewAlias = (e) => {
    setNewAlias(e.target.value);
  };
  const handelNewDetails = (e) => {
    setNewDetails(e.target.value);
  };
  const handelNewPhone = (e) => {
    setNewPhone(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (newAlias === "" || newDetails === "" || newPhone === "") {
      console.log("من فضلك ادخل جميع البيانات");
      return;
    }
    setLoading(true);
    await dispatch(
      userUpdateAddress(Item.id, {
        alias: newAlias,
        details: newDetails,
        phone: newPhone,
        city: "cairo",
        postalCode: "41516",
      })
    );
    setLoading(false);
    navigate("/user/address");
  };

  //   return result when update address
  const editAddressResult = useSelector(
    (state) => state.userReducer.UpdatedAddress
  );

  useEffect(() => {
    if (!loading) {
      if (editAddressResult.data) {
        console.log("تم تعديل الكوبون بنجاح");
      }
    }
  }, [editAddressResult, loading]);

  return [
    newAlias,
    handelNewAlias,
    newDetails,
    handelNewDetails,
    newPhone,
    handelNewPhone,
    handelSubmit,
    loading,
    setLoading,
    editAddressResult,
  ];
};

export default EditAddressHook;
