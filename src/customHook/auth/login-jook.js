import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
const LoginHook = () => {
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
      setIsLogin(false);
    }, 2000);
  };

  //  ====================== get the data from the server when user login  ======================
  const auth = useSelector((state) => state.authreduccer.loginUser);
  if (auth) {
    console.log(auth, "auth.data");
  }

  //  ====================== store the data(token) in the local storage when user login  ======================
  useEffect(() => {
    if (!isLogin) {
      if (auth.data) {
        if (auth.token) {
          localStorage.setItem("token", auth.token);
          alert("تم تسجيل الدخول بنجاح");
          // window.location.reload();
        } else {
          //   if token is not exist remove the token from the local storage
          localStorage.removeItem("token");
        }

        if (auth.status === 400) {
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
