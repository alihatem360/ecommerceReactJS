import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifyCode } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const VerifyCodeHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const handelCodeChange = (e) => {
    setCode(e.target.value);
  };
  // ====================== handelSubmit to verify the code ======================
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (code === "") {
      alert("الكود مطلوب");
    }
    setIsLoding(true);
    await dispatch(verifyCode({ resetCode: code }));
    setIsLoding(false);
  };
  // ====================== get the data from the redux ======================
  const verifyCodeData = useSelector((state) => state.authreduccer.verifyCode);
  useEffect(() => {
    if (!isLoding) {
      if (verifyCodeData.status === "Success") {
        alert("تم تاكيد الكود");
        setTimeout(() => {
          navigate("/user/reset-password");
        }, 2000);
      }
      if (verifyCodeData.status === "fail") {
        alert("هذا الكود غير صحيح يرجى التاكد منه");
        return;
      }
    }
  }, [isLoding]);
  return [code, handelCodeChange, handelSubmit];
};

export default VerifyCodeHook;
