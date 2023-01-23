import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import { getSubcategory } from "../../redux/actions/subCategoryAction";
import { getProductDetails } from "../../redux/actions/producAction";
import { updateProduct } from "../../redux/actions/producAction";
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

  // البيانات اللي جاي لما اليوزر يضغط علي العنصر اللي هيعدل عليه
  const productDetails = useSelector(
    (state) => state.productReducer.oneProduct
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
  const [categoryName, setCategoryName] = useState("");
  const [brandID, setBrandID] = useState("");
  // خزن العناصر الفرعيه اللي اليوزر اختارها
  const [selectedSubCat, setSelectedSubCat] = useState([]);
  // اظهار و اخفاء البلته اللي بيختار منها اللون
  const [showColor, setShowColor] = useState(false);
  // خزن الالوان اللي اليوزر اختارها
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const handelSelectCat = async (e) => {
    // هحفظ التصنيف الرئيسي اللي اليوزر اختاره
    setCatID(e.target.value);
  };

  //   عرض البيانات اللي بتاعت البرودكت اللي اليوزر اختاره للتعديل عليها
  useEffect(() => {
    if (productDetails.data) {
      setImages(productDetails.data.images);
      setProducName(productDetails.data.title);
      setDescription(productDetails.data.description);
      setPriceBeforeDiscount(productDetails.data.price);
      // هعمل ابديت االاسم اللي بتاع التصنيف الرئيسي اللي اليوزر اختاره
      setCatID(productDetails.data.category);
      setBrandID(productDetails.data.brand);
      setColors(productDetails.data.availableColors);
      setQuantity(productDetails.data.quantity);
    }
  }, [productDetails.data]);

  //  عرض العناصر الفرعيه علي اساس التصنيف الرئيسي اللي اليوزر اختارهو تخزينها في ال state
  useEffect(() => {
    if (catID !== 0) {
      const fetchData = async () => {
        await dispatch(getSubcategory(catID));
      };
      fetchData();
    }
  }, [catID]);

  // store the subcategories in the options state that will be displayed in the select element
  // when the user selects the main category
  // and subcategories is returned from the server
  useEffect(() => {
    if (subcategories.data) {
      setOptions(subcategories.data.data);
    }
  }, [subcategories.data]);

  // حفظ البراند اللي اليوزر اختاره
  const handelSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  const handleOnChangeColor = (color) => {
    setColors([...colors, color.hex]);
  };

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

  // function to convert urlIamge to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  const handelSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    const formData = new FormData();

    let imageFile;
    //chick if the image is url or base64
    if (images[0].length <= 1000) {
      //  convert the image url to file ✔
      convertURLtoFile(images[0]).then((val) => (imageFile = val));
    } else {
      // convert the image base64 to file ✔
      imageFile = dataURLtoFile(images[0], Math.random() + ".png");
    }

    let arrayImages = [];
    //chick if the image is url or base64
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        //  convert the image url to file ✔
        convertURLtoFile(images[index]).then((val) => arrayImages.push(val));
      } else {
        // convert the image base64 to file ✔
        arrayImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    formData.append("title", producName);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("price", priceBeforeDiscount);
    //  wait for the array of images to be converted to files
    setTimeout(() => {
      arrayImages.map((imageItem) => {
        formData.append("images", imageItem);
      });
      formData.append("imageCover", imageFile);
    }, 1000);
    formData.append("category", catID);
    formData.append("brand", brandID);

    // send the array of colors
    console.log(colors, "colors array");
    colors.map((color) => {
      formData.append("availableColors", color);
    });

    selectedSubCat.map((item) => formData.append("subcategory", item._id));

    setLoading(true);
    setTimeout(async () => {
      await dispatch(updateProduct(productDetails.data._id, formData));
    }, 1000);
    setLoading(false);
    console.log("item updated successfully");
    //  redirect to the products page
  };

  useEffect(() => {
    if (!loading) {
      setProducName("");
      setDescription("");
      setPriceBeforeDiscount("سعر المنتج قبل الخصم");
      setPriceAfterDiscount("سعر المنتج بعد الخصم");
      setQuantity("الكميه المتاحه");
      setImages([]);
      setBrandID(0);
      setSelectedSubCat([]);
      setShowColor(false);
      setColors([]);
      setOptions([]);

      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }, [loading]);

  return [
    brandID,
    catID,
    selectedSubCat,
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
