import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import SearchProductsHook from "../product/search-product-hook";
const SideFilterSearchHook = () => {
  const [mostSoldProducts, pagination, handelPaginate, handelSearch, result] =
    SearchProductsHook();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getAllCategory());
      dispatch(getAllBrands());
    };
    fetchData();
  }, []);
  const category = useSelector((state) => state.categoryReducer.categories);
  const brand = useSelector((state) => state.brandReducer.brands);
  var catItems = [];
  var brandItems = [];
  let catQuery = "";
  let brandQuery = "";
  try {
    if (category) {
      catItems = category.data;
    }
  } catch (e) {
    console.log(e);
  }
  try {
    if (brand) {
      brandItems = brand.data;
    }
  } catch (e) {
    console.log(e);
  }

  //  store checked category in catCheck array
  const [catCheck, setCatCheck] = useState([]);
  const [brandCheck, setBrandCheck] = useState([]);

  //  ======================  category check box ======================
  const handelCatCheck = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatCheck([]);
    } else {
      if (e.target.checked) {
        setCatCheck([...catCheck, value]);
      } else {
        const newCatCheck = catCheck.filter((item) => item !== value);
        setCatCheck(newCatCheck);
      }
    }
  };
  // ======================  run search when catCheck state change ======================
  useEffect(() => {
    //  create query string for category
    // category[in][]=63cfce983d58c01d38a32bb0&category[in][]=63cfc6a83d58c01d38a32a62
    catQuery = catCheck.map((item) => `category[in][]=${item}`).join("&");

    localStorage.setItem("catQuery", catQuery);
    //  call handelSearch to run search with new query string
    setTimeout(() => {
      handelSearch();
    }, 500);
  }, [catCheck]);

  // ======================  brand check box ======================
  const handelBrandCheck = (e) => {
    if (e.target.value === "0") {
      setBrandCheck([]);
    } else {
      if (e.target.checked) {
        setBrandCheck([...brandCheck, e.target.value]);
      } else {
        setBrandCheck(brandCheck.filter((item) => item !== e.target.value));
      }
    }
  };

  // ======================  run search when brandCheck state change ======================
  useEffect(() => {
    //  create query string for brand
    // brand[in][]=63cfce983d58c01d38a32bb0&brand[in][]=63cfc6a83d58c01d38a32a62
    brandQuery = brandCheck.map((item) => `brand[in][]=${item}`).join("&");
    localStorage.setItem("brandQuery", brandQuery);
    //  call handelSearch to run search with new query string
    setTimeout(() => {
      handelSearch();
    }, 500);
  }, [brandCheck]);

  // =================== handel price from ===================
  const [priceFrom, setPriceFrom] = useState("");
  const handelPriceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };

  // =================== handel price to ===================
  const [priceTo, setPriceTo] = useState("");
  const handelPriceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };

  // =================== handel search when price change ===================
  useEffect(() => {
    setTimeout(() => {
      handelSearch();
    }, 1000);
  }, [priceFrom, priceTo]);

  return [
    catItems,
    brandItems,
    handelCatCheck,
    handelBrandCheck,
    handelPriceFrom,
    handelPriceTo,
  ];
};

export default SideFilterSearchHook;
