import React, { useState, useEffect } from "react";
import avatar from "../../images/avatar.png";
import { createCategory } from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const AddCategoryHook = () => {
  const [image, setImage] = useState(avatar);
  //  name of category from input field
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(true);
  // عند الضغط على زر الحفظ
  const [isPressed, setIsPressed] = useState(false);

  const onChangeName = (e) => {
    setCategory(e.target.value);
  };

  // dispatch action
  const dispatch = useDispatch();
  //  when image change and user can see image in input field after select image
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
      //  save path of image in selectedFile
      setSelectedFile(event.target.files[0]);
    }
  };

  // handel submit send data to server and save it in database using redux
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!category || !selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("name", category);
    setLoading(true);
    // انتظار الاجابه من السيرفر بعد اضافه التصنيف مع الصوره
    setIsPressed(true);
    await dispatch(createCategory(formData));
    setLoading(false);
  };

  //  فضي الحقول بعد اضافه التصنيف
  useEffect(() => {
    if (!loading) {
      //  فضي الحقول بعد اضافه التصنيف
      setCategory("");
      setImage(avatar);
      setSelectedFile("");
      setLoading(true);
      console.log("تم اضافه التصنيف بنجاح");

      setTimeout(() => {
        setIsPressed(false);
      }, 1000);
    }
  }, [loading]);

  return [
    image,
    category,
    loading,
    isPressed,
    handleSubmit,
    onImageChange,
    onChangeName,
  ];
};
export default AddCategoryHook;
