import { useEffect } from "react";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/authAction";
const RegisterHook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  const handelSetName = (e) => {
    setName(e.target.value);
  };
  const handelSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelSetPhone = (e) => {
    setPhone(e.target.value);
  };
  const handelSetPassword = (e) => {
    setPassword(e.target.value);
  };
  const handelSetConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  //   ====================== handelValidate to check if the user enter all the data ======================
  const handelValidate = () => {
    if (name === "") {
      alert("name is required");
      return false;
    }
    if (email === "") {
      alert("email is required");
      return false;
    }
    if (phone === "") {
      alert("phone is required");
      return false;
    }
    if (password === "") {
      alert("password is required");
      return false;
    }
    if (confirmPassword === "") {
      alert("confirmPassword is required");
      return false;
    }
    if (password !== confirmPassword) {
      alert("password not match");
      return false;
    }
    return true;
  };

  //   ====================== handelSubmit to send the data to the server ======================
  const handelSubmit = async (e) => {
    console.log("handelSubmit in hook register");
    e.preventDefault();
    handelValidate();
    setIsLoding(true);
    await dispatch(
      createUser({
        name: name,
        email: email,
        phone: phone,
        password: password,
        passwordConfirm: confirmPassword,
      })
    );
    setIsLoding(false);
  };

  //  ====================== useSelector to get the data from the server ======================
  const respons = useSelector((state) => state.authreduccer.createdUser);
  //   console.log(respons, "respons in hook register");

  //   ====================== useEffect run when submit the form ======================
  useEffect(() => {
    if (respons) {
      //   console.log(respons, "respons");
      if (respons.token) {
        //    store the token in the local storage
        localStorage.setItem("token", respons.token);
        alert("you are registerd");
      }

      if (respons.errors) {
        if (respons.errors[0].msg === "E-mail already in use") {
          alert("E-mail already in use");
        }
      }
    }
  }, [isLoding]);
  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    isLoding,
    handelSetName,
    handelSetEmail,
    handelSetPhone,
    handelSetPassword,
    handelSetConfirmPassword,
    handelSubmit,
  ];
};

export default RegisterHook;
