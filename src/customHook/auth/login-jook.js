import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const LoginHook = () => {
  // -= navigation =-
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  //   ====================== handelsubmit submit the data to the server ======================
  const submitHandler = (event) => {
    event.preventDefault();
    setIsLogin(true);
    dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
    setTimeout(() => {
      setEmail("");
      setPassword("");
      setIsLogin(false);
    }, 2000);
  };

  //  ====================== get the data from the server when user login  ======================
  const auth = useSelector((state) => state.authreduccer.loginUser);
  //   console.log(auth, "auth");

  //  ====================== store the data(token)  & USER DATA in the local storage when user login  ======================
  useEffect(() => {
    if (!isLogin) {
      if (auth.data) {
        if (auth.token) {
          localStorage.setItem("token", auth.token);
          localStorage.setItem("user", JSON.stringify(auth.data));
          alert("تم تسجيل الدخول بنجاح");
          window.location.href = "/";
          // window.location.reload();
        } else {
          //   if token is exists remove the token from the local storage
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        //  if the status is 400 or 500 show the error massage
        if (auth.status === 400 || auth.status === 500) {
          alert("الايميل او كلمة المرور غير صحيحة");
        }
      }
    }
  }, [auth.data, isLogin]);

  return [
    email,
    password,
    isLogin,
    emailChangeHandler,
    passwordChangeHandler,
    submitHandler,
  ];
};

export default LoginHook;
