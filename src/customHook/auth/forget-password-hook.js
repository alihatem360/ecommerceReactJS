import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { forgetPassword } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  //   ====================== handelEmailChange to get the email from the user ======================
  const handelEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email, "email");
  };
  // ====================== handelSubmit to get reset password link ======================
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("الايميل مطلوب");
    }
    setIsLoding(true);
    await dispatch(
      forgetPassword({
        email: email,
      })
    );
    setIsLoding(false);
    setTimeout(() => {
      navigate("/user/verify-code");
    }, 2000);
  };
  //   ====================== get the data from the redux ======================
  const forgetPasswordData = useSelector(
    (state) => state.authreduccer.resetCode
  );

  useEffect(() => {
    if (!isLoding) {
      if (forgetPasswordData.status === "fail") {
        alert("هذا الايميل غير موجود");
      }
      if (forgetPasswordData.status === "Success") {
        alert("تم ارسال رابط الى الايميل");
      }
    }
  }, [isLoding]);

  return [email, handelEmailChange, isLoding, handelSubmit];
};

export default ForgetPasswordHook;
