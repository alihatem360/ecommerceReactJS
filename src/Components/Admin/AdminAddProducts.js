import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import { CompactPicker } from "react-color";
import { getSubcategory } from "../../redux/actions/subCategoryAction";
import { createProduct } from "../../redux/actions/producAction";

// import productReducer from "../../redux/reducers/productReducer";
import { Spinner } from "react-bootstrap";
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

  // const product = useSelector((state) => state.productReducer.product);
  // console.log(product.status, "product from redux");

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
  const [loading, setLoading] = useState(true);
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
    setSelectedSubCat(selectedList);
  };

  const onRemove = (selectedList) => {
    setSelectedSubCat(selectedList);
  };

  //  function to convert base64 to file

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    //  convert the first image to file ✔ "cover image"
    const imageFile = dataURLtoFile(images[0], Math.random() + ".jpg");

    //  convert the array of images to array of files ✔
    // احول الصور اللي في ال array الى array من ال files
    const arrayImages = Array.from(
      Array(Object.keys(images).length).keys()
    ).map((item, index) => {
      return dataURLtoFile(images[index], Math.random() + ".jpg");
    });

    formData.append("title", producName);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("price", priceBeforeDiscount);
    formData.append("imageCover", imageFile);
    formData.append("category", catID);
    formData.append("brand", brandID);

    // send the array of colors
    colors.map((color) => {
      formData.append("availableColors", color);
    });

    // send the array of subcategories
    selectedSubCat.map((subCat) => {
      formData.append("subcategory", subCat._id);
    });

    // send the array of images
    arrayImages.map((imageItem) => {
      formData.append("images", imageItem);
    });

    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
    // console.log("تم اضافه المنتج بنجاح");
  };

  useEffect(() => {
    if (!loading) {
      setProducName("");
      setDescription("");
      setPriceBeforeDiscount("سعر المنتج قبل الخصم");
      setPriceAfterDiscount("سعر المنتج بعد الخصم");
      setQuantity("الكميه المتاحه");
      setImages([]);
      setCatID(0);
      setSubCatIDs("");
      setBrandID([]);
      setSelectedSubCat([]);
      setShowColor(false);
      setColors([]);
      setOptions([]);
      setTimeout(() => {
        setLoading(true);
      }, 1000);
      console.log("تم اضافه المنتج بنجاح");
    }
  }, [loading]);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صور للمنتج</div>

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
          {!loading && (
            <>
              <div className="text-center mt-3 m-2">
                <Spinner animation="border" variant="primary" />
              </div>
            </>
          )}
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
        <Col sm="4">
          <></>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProducts;
