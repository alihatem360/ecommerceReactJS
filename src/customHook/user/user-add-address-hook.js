import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userAddAddress } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
const UserAddAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handelAlias = (e) => {
    setAlias(e.target.value);
  };
  const handelDetails = (e) => {
    setDetails(e.target.value);
  };

  const handelPhone = (e) => {
    setPhone(e.target.value);
  };

  //   clear form after submit
  const clearForm = () => {
    setAlias("");
    setDetails("");
    setPhone("");
  };

  const handelSubmit = async (e) => {
    if (alias === "" || details === "" || phone === "") {
      console.log("من فضلك ادخل جميع البيانات");
      return;
    }
    e.preventDefault();
    await dispatch(
      userAddAddress({
        alias: alias,
        details: details,
        phone: phone,
        city: "cairo",
        postalCode: "12345",
      })
    );
    setLoading(false);
    setTimeout(() => {
      navigate("/user/address");
    }, 1000);
    clearForm();
  };

  const userAddAddressRespons = useSelector(
    (state) => state.userReducer.userAddAddress
  );

  useEffect(() => {
    if (!loading) {
      if (userAddAddressRespons.status) {
        if (userAddAddressRespons.status === "success") {
          console.log("تم اضافة العنوان بنجاح");
        }
      }
    }
  }, [userAddAddressRespons, loading]);

  return [
    alias,
    details,
    phone,
    handelAlias,
    handelDetails,
    handelPhone,
    handelSubmit,
  ];
};

export default UserAddAddressHook;
