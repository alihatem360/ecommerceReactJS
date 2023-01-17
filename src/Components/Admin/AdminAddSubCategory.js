import React from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import SubCategoryHook from "../../customHook/subCategory/add-subCategory-hook";
const AdminAddSubCategory = () => {
  const [id, name, category, loading, handelChange, handelSubmit, setName] =
    SubCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <select
            name="languages"
            id="lang"
            className="select mt-3 px-2 "
            onChange={handelChange}
          >
            <option value="val">اختر التصنيف الرئيسي</option>
            {category.data &&
              category.data.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
    </div>
  );
};
export default AdminAddSubCategory;
