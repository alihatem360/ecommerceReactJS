import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import { createCategory } from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const AdminAddCategory = () => {
  const [image, setImage] = useState(avatar);
  //  name of category from input field
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(true);
  // عند الضغط على زر الحفظ
  const [isPressed, setIsPressed] = useState(false);

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

  const response = useSelector((state) => state.categoryReducer.categories);

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

      if (response) {
        console.log(response);
      }
    }
  }, [loading]);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={image}
                alt=""
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              id="upload-photo"
              onChange={onImageChange}
              name="photo"
            />
          </div>
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>

      {
        //  show message when user add category
        isPressed ? (
          loading ? (
            <div
              className="alert alert-success mt-3
            d-flex justify-content-start align-items-center
            "
              role="alert"
            >
              <span className="m-2">جاري اضافه التصنيف</span>
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            <div className="alert alert-success mt-3" role="alert">
              تم اضافه التصنيف بنجاح
            </div>
          )
        ) : null
      }
    </div>
  );
};
export default AdminAddCategory;
