import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import { CompactPicker } from "react-color";
import { getSubcategory } from "../../redux/actions/subCategoryAction";

//
const AdminAddProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrands());
  }, []);

  const category = useSelector((state) => state.categoryReducer.categories);
  const brands = useSelector((state) => state.brandReducer.brands);
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
  const [catID, setCatID] = useState(0);
  //  عرض العناصر الفرعيه اللي اليوزر اختارها
  const [subCatIDs, setSubCatIDs] = useState("");
  const [brandID, setBrandID] = useState([]);
  // خزن العناصر الفرعيه اللي اليوزر اختارها
  const [selectedSubCat, setSelectedSubCat] = useState([]);
  // اظهار و اخفاء البلته اللي بيختار منها اللون
  const [showColor, setShowColor] = useState(false);
  // خزن الالوان اللي اليوزر اختارها
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);

  // حفظ التصنيف الرئيسي اللي اليوزر اختاره
  const handelSelectCat = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getSubcategory(e.target.value));
    }
    setCatID(e.target.value);
  };

  //  عرض العناصر الفرعيه علي اساس التصنيف الرئيسي اللي اليوزر اختارهو تخزينها في ال state
  useEffect(() => {
    if (catID !== 0) {
      console.log(subcategories, "subcategories from useEffect");
      setOptions(subcategories.data.data);
    }
  }, [catID]);

  // حفظ البراند اللي اليوزر اختاره
  const handelSelectBrand = (e) => {
    setBrandID(e.target.value);
    console.log(e.target.value, "brand id");
  };

  const handleOnChangeColor = (color) => {
    console.log(color.hex);
    setColors([...colors, color.hex]);
  };

  //
  const onSelect = (selectedList) => {
    console.log(selectedList, "selectedList");
    setSelectedSubCat(selectedList);
  };

  const onRemove = (selectedList) => {
    console.log(selectedList, "selectedList");
    setSelectedSubCat(selectedList);
  };
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
            onChange={(e) => handelSelectCat(e)}
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
            onChange={handelSelectBrand}
          >
            <option value="0">اختر العلامه التجاريه للمنتج</option>
            {brands.data &&
              brands.data.map((brand) => {
                return (
                  <option value={brand._id} key={brand._id}>
                    {brand.name}
                  </option>
                );
              })}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1 &&
              colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="color ms-2 border  mt-1"
                    style={{ backgroundColor: color }}
                    onClick={() => setColors(colors.filter((c) => c !== color))}
                  ></div>
                );
              })}

            <img
              src={add}
              alt=""
              width="30px"
              height="35px"
              className=""
              onClick={() => setShowColor(!showColor)}
              style={{ cursor: "pointer" }}
            />
            {showColor && (
              <CompactPicker
                onChangeComplete={(color) => handleOnChangeColor(color)}
              />
            )}
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
