import { useState, useEffect } from "react";
import { resetPassword } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handelConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("user_email");
    localStorage.removeItem("token");
    if (password === "" || confirmPassword === "") {
      alert("كلمه السر مطلوبه");
      return;
    } else if (password !== confirmPassword) {
      alert("كلمه السر غير متطابقه");
      return;
    } else {
      setIsLoding(true);
      await dispatch(
        resetPassword({
          email: email,
          newPassword: password,
        })
      );

      alert("تم تغيير كلمه السر");
      setIsLoding(false);
    }
  };

  const resetPasswordData = useSelector(
    (state) => state.authreduccer.resetPassword
  );

  useEffect(() => {
    if (!isLoding) {
      if (resetPasswordData.length !== 0) {
        localStorage.setItem("token", resetPasswordData.token);
        window.location.href = "/";
      }
      if (resetPasswordData.message === "reset code not verified") {
        alert("الكود غير صحيح");
      }
    }
  }, [isLoding]);

  return [
    password,
    handelPasswordChange,
    confirmPassword,
    handelConfirmPasswordChange,
    handelSubmit,
  ];
};

export default ResetPasswordHook;
