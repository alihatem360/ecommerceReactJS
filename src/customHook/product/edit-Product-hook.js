import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import { getSubcategory } from "../../redux/actions/subCategoryAction";
import { createProduct } from "../../redux/actions/producAction";
import { getProductDetails } from "../../redux/actions/producAction";

const EditProducHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrands());
      await dispatch(getProductDetails(id));
    };
    fetchData();
  }, []);

  const category = useSelector((state) => state.categoryReducer.categories);
  const brands = useSelector((state) => state.brandReducer.brands);
  const subcategories = useSelector(
    (state) => state.subcategoryReducer.subcategory
  );
  const productDetails = useSelector(
    (state) => state.productReducer.oneProduct
  );

  if (productDetails.data) {
    console.log("productDetails from hook", productDetails.data.title);
  }
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
  const [categoryName, setCategoryName] = useState("");
  //  عرض العناصر الفرعيه اللي اليوزر اختارها
  const [subCatIDs, setSubCatIDs] = useState("");
  const [brandID, setBrandID] = useState("");
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

  //   عرض البيانات اللي بتاعت البرودكت اللي اليوزر اختاره للتعديل عليها
  useEffect(() => {
    if (productDetails.data) {
      setProducName(productDetails.data.title);
      setDescription(productDetails.data.description);
      setPriceBeforeDiscount(productDetails.data.price);
      setCategoryName(productDetails.data.category);
      setBrandID(productDetails.data.brand);
      setColors(productDetails.data.availableColors);
    }
  }, [productDetails.data]);

  //  عرض العناصر الفرعيه علي اساس التصنيف الرئيسي اللي اليوزر اختارهو تخزينها في ال state
  useEffect(() => {
    if (catID !== 0) {
      // console.log(subcategories, "subcategories from useEffect");
      setOptions(subcategories.data.data);
    }
  }, [catID]);

  // حفظ البراند اللي اليوزر اختاره
  const handelSelectBrand = (e) => {
    setBrandID(e.target.value);
    // console.log(e.target.value, "brand id");
  };

  const handleOnChangeColor = (color) => {
    // console.log(color.hex);
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

  const handelSubmit = async (e) => {};

  //   const productStatus = useSelector(
  //     (state) => state.productReducer.product.status
  //   );
  // console.log(productStatus, "product from redux");

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
      setBrandID(0);
      setSelectedSubCat([]);
      setShowColor(false);
      setColors([]);
      setOptions([]);
      setTimeout(() => {
        setLoading(true);
      }, 1000);

      //   if (productStatus === 201) {
      //     console.log("تم اضافه المنتج بنجاح");
      //   }
    }
  }, [loading]);

  return [
    brandID,
    categoryName,
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
  ];
};

export default EditProducHook;
