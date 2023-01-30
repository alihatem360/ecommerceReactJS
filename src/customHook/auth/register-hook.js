import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const RegisterHook = () => {
  // -= navigation =-
  const navigate = useNavigate();
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

  //   ====================== handelErrormassage to show the error massage to the user ======================
  const handelErrormassage = (massage) => {
    if (massage === "E-mail already in use") {
      alert("الايميل مستخدم من قبل");
    }

    if (massage === "Invalid email formate") {
      alert("الايميل غير صحيح");
    }
    if (massage === "accept only egypt phone numbers") {
      alert("رقم الهاتف غير صحيح");
    }
  };

  // ====================== crete fun to reset the form ======================
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
  };

  //  ====================== useSelector to get the data from the server ======================
  const respons = useSelector((state) => state.authreduccer.createdUser);

  //   ====================== useEffect run when submit the form ======================
  useEffect(() => {
    if (respons) {
      if (respons.token) {
        //    store the token in the local storage
        localStorage.setItem("token", respons.token);
        alert("تم التسجيل بنجاح");
        //   reset the form
        resetForm();

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }

      if (respons.errors) {
        // handel the error massage
        handelErrormassage(respons.errors[0].msg);
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
