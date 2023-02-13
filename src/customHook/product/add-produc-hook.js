import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import { getSubcategory } from "../../redux/actions/subCategoryAction";
import { createProduct } from "../../redux/actions/producAction";

const AddProducHook = () => {
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

  //  عرض العناصر الفرعيه علي اساس التصنيف الرئيسي اللي اليوزر اختارهو تخزينها في ال state
  useEffect(() => {
    if (catID !== 0) {
      setOptions(subcategories.data.data);
    }
  }, [catID]);

  // حفظ البراند اللي اليوزر اختاره
  const handelSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  const handleOnChangeColor = (color) => {
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
    formData.append("priceAfterDiscount", priceAfterDiscount);
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
  };

  const productStatus = useSelector(
    (state) => state.productReducer.product.status
  );

  if (productStatus) {
    console.log(productStatus, "productStatus");
  }

  useEffect(() => {
    if (!loading) {
      setProducName("");
      setDescription("");
      setPriceBeforeDiscount("سعر المنتج قبل الخصم");
      setPriceAfterDiscount("سعر المنتج بعد الخصم");
      setQuantity("الكميه المتاحه");
      setImages([]);
      setCatID(0);
      setBrandID(0);
      setSelectedSubCat([]);
      setShowColor(false);
      setColors([]);
      setOptions([]);
      setTimeout(() => {
        setLoading(true);
      }, 1000);

      if (productStatus === 201) {
        console.log("تم اضافه المنتج بنجاح");
      }
    }
  }, [loading]);

  return [
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

export default AddProducHook;
