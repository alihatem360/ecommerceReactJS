import React from "react";
import { Row, Col } from "react-bootstrap";
import AddBrandHook from "../../customHook/brand/Add-brand-hook";
import avatar from "../../images/avatar.png";
import { Spinner } from "react-bootstrap";
const AdminAddBrand = () => {
  const [
    image,
    category,
    loading,
    isPressed,
    handleSubmit,
    onImageChange,
    onChangeName,
  ] = AddBrandHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماركه</div>
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
            onChange={onChangeName}
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

export default AdminAddBrand;
