import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../../redux/actions/userAction";
import { userChangePassword } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const UserProfileHook = () => {
  let user = [];
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  show modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);

  //   new data
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  //   passwrod data
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handelNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handelConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  // clear form after submit
  const ClearFormPass = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  //    handel update password
  const handelUpdatePassword = async () => {
    if (
      oldPassword === "" ||
      newPassword === "" ||
      confirmPassword === "" ||
      newPassword !== confirmPassword
    ) {
      console.log("من فضلك ادخل جميع البيانات");
    }
    setLoading(true);
    await dispatch(
      userChangePassword({
        currentPassword: oldPassword,
        password: newPassword,
        passwordConfirm: confirmPassword,
      })
    );
    ClearFormPass();
    setLoading(false);
  };

  //   response after update password

  const userResponse = useSelector(
    (state) => state.userReducer.changedPassword
  );

  useEffect(() => {
    if (!loading) {
      if (userResponse.data && userResponse.status === 400) {
        console.log("كلمة المرور الحالية غير صحيحة");
        return;
      }
      if (userResponse.data) {
        console.log("تم تغيير كلمة المرور بنجاح");
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  }, [userResponse, loading]);

  //   handel change
  const handelnameChange = (e) => {
    setName(e.target.value);
  };
  const handelphoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handelEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //  handel update user
  const handelUpdate = async () => {
    if (name === "" || phone === "" || email === "") {
      alert("من فضلك ادخل جميع البيانات");
      return;
    }
    // check if email is changed or not
    let Body;
    if (user.email === email) {
      Body = {
        name: name,
        phone: phone,
      };
    } else {
      Body = {
        name: name,
        phone: phone,
        email: email,
      };
    }
    setLoading(true);
    await dispatch(updateUserData(Body));
    handleClose();
    setLoading(false);
  };

  // get response after update

  const updatedUser = useSelector((state) => state.userReducer.updatedUser);
  useEffect(() => {
    if (!loading) {
      if (updatedUser.data && updatedUser.status === "success") {
        localStorage.setItem("user", JSON.stringify(updatedUser.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
      if (updatedUser.data && updatedUser.status === 400) {
        console.log("تم تسجيل البريد الالكتروني من قبل");
      }
    }
  }, [updatedUser, loading]);

  return [
    show,
    handleClose,
    handleShow,
    handelUpdate,
    handelnameChange,
    handelphoneChange,
    handelEmailChange,
    name,
    phone,
    email,
    handelUpdatePassword,
    handelOldPasswordChange,
    handelNewPasswordChange,
    handelConfirmPasswordChange,
    oldPassword,
    newPassword,
    confirmPassword,
  ];
};

export default UserProfileHook;
