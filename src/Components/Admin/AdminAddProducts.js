import { Row, Col } from "react-bootstrap";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
// import productReducer from "../../redux/reducers/productReducer";
import { Spinner } from "react-bootstrap";
import AddProducHook from "../../customHook/product/add-produc-hook";
const AdminAddProducts = () => {
  const [
    producName,
    setProducName,
    description,
    setDescription,
    priceBeforeDiscount,
    setPriceBeforeDiscount,
    priceAfterDiscount,
    setPriceAfterDiscount,
    quantity,
    setQuantity,
    images,
    setImages,
    showColor,
    setShowColor,
    colors,
    setColors,
    options,
    loading,
    handelSelectCat,
    handelSelectBrand,
    handleOnChangeColor,
    onSelect,
    onRemove,
    handelSubmit,
    category,
    brands,
  ] = AddProducHook();
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
