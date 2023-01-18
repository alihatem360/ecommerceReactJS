import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const AdminAddProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const category = useSelector((state) => state.categoryReducer.categories);
  if (category) {
    console.log(category.data, "category data");
  }
  const subcategories = useSelector(
    (state) => state.subcategoryReducer.subcategory
  );
  // ال array اللي هتحط فيها الصور
  const [images, setImages] = useState([]);
  const [producName, setProducName] = useState("");
  const [description, setDescription] = useState("");
  const [priceBeforeDiscount, setPriceBeforeDiscount] =
    useState("السعر قبل الخصم");
  const [priceAfterDiscount, setPriceAfterDiscount] =
    useState("السعر بعد الخصم");
  const [quantity, setQuantity] = useState(" الكميه المتاحه");
  const [catID, setCatID] = useState("");
  //  عرض العناصر الفرعيه اللي اليوزر اختارها
  const [subCatID, setSubCatID] = useState("");
  const [brandID, setBrandID] = useState([]);
  // خزن العناصر الفرعيه اللي اليوزر اختارها
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const options = [
    { name: "التصنيف الاول", id: 1 },
    { name: "التصنيف الثاني", id: 2 },
  ];
  const onSelect = (selectedList, selectedItem) => {};

  const onRemove = (selectedList, removedItem) => {};
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>

          {/* 
              ال component اللي هتحط فيها الصور
           */}
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={4}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={producName}
            onChange={(e) => setProducName(e.target.value)}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBeforeDiscount}
            onChange={(e) => setPriceBeforeDiscount(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج بعد الخصم"
            value={priceAfterDiscount}
            onChange={(e) => setPriceAfterDiscount(e.target.value)}
          />

          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكميه المتاحه"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <select
            name="category"
            id="lang"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data &&
              category.data.map((cat) => {
                return (
                  <option value={cat._id} key={cat._id}>
                    {cat.name}
                  </option>
                );
              })}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">الماركة</option>
            <option value="val2">التصنيف الماركة الاولي</option>
            <option value="val2">التصنيف الماركة الثانيه</option>
            <option value="val2">التصنيف الرابع</option>
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
            <div
              className="color ms-2 border mt-1 "
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "black" }}
            ></div>
            <img src={add} alt="" width="30px" height="35px" className="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProducts;
