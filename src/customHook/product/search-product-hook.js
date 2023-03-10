import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductSearch } from "../../redux/actions/producAction";

const SearchProductsHook = () => {
  const [limitPage, setLimitPage] = useState(8);
  const [paginatePage, setPaginatePage] = useState("");
  const sortTitle = [
    "بدون ترتيب",
    "الاكثر مبيعا",
    "الاعلى تقييما",
    "السعر من الاقل الي الاعلى",
    "السعر من الاعلى الي الاقل",
  ];

  const dispatch = useDispatch();
  // =================== handel store ===================
  let storType = "";
  let stor = "";
  const handelStore = () => {
    if (localStorage.getItem("sortType")) {
      storType = localStorage.getItem("sortType");
    }

    if (storType === sortTitle[0]) {
      stor = "";
    } else if (storType === sortTitle[3]) {
      stor = "+price";
    } else if (storType === sortTitle[4]) {
      stor = "-price";
    } else if (storType === sortTitle[1]) {
      stor = "-sold";
    } else if (storType === sortTitle[2]) {
      stor = "-quantity";
    }
  };

  let word = "";
  let catQuery = "";
  let brandQuery = "";
  let priceTo = "";
  let priceFrom = "";
  let priceFromQuery = "";
  let priceToQuery = "";
  // =================== get data from local storage ===================
  const getDataLocalStorage = () => {
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("catQuery")) {
      catQuery = localStorage.getItem("catQuery");
    }
    if (localStorage.getItem("brandQuery")) {
      brandQuery = localStorage.getItem("brandQuery");
    }
    if (localStorage.getItem("priceTo") > 0) {
      priceTo = localStorage.getItem("priceTo");
    }
    if (localStorage.getItem("priceFrom") > 0) {
      priceFrom = localStorage.getItem("priceFrom");
    }
  };

  // =================== check price before search ===================
  const checkPrice = () => {
    if (priceFrom > 0) {
      priceFromQuery = `&price[gte]=${priceFrom}`;
    }
    if (priceTo > 0 && priceTo > priceFrom) {
      priceToQuery = `&price[lte]=${priceTo}`;
    }
  };

  // =================== handel search ===================
  const handelSearch = async () => {
    getDataLocalStorage();
    handelStore();
    checkPrice();
    await dispatch(
      getAllProductSearch(
        `&limit=${limitPage}&page=${paginatePage}&keyword=${word}&sort=${stor}&${catQuery}&${brandQuery}${priceFromQuery}${priceToQuery}`
      )
    );
  };

  // =================== handel search when page load ===================
  useEffect(() => {
    handelSearch();
  }, []);

  // =================== handel pagination ===================
  const handelPaginate = (page) => {
    getDataLocalStorage();
    setPaginatePage(page);
    handelStore();
    checkPrice();
    dispatch(
      getAllProductSearch(
        `&limit=${limitPage}&page=${page}&keyword=${word}&sort=${stor}&${catQuery}&${brandQuery}${priceFromQuery}${priceToQuery}`
      )
    );
  };

  const allProducts = useSelector((state) => state.productReducer.allProducs);

  let mostSoldProducts = [];
  let pagination = [];
  // result of search query (number of result)
  let result = 0;
  // put try catch to avoid error when data is null or undefined
  try {
    if (allProducts.data) {
      mostSoldProducts = allProducts.data.data;
      pagination = allProducts.data.paginationResult;
      // result of search query (number of result)
      result = allProducts.data.results;
    } else {
      mostSoldProducts = [];
      pagination = [];
      result = 0;
    }
  } catch (error) {
    console.log(error);
  }

  return [mostSoldProducts, pagination, handelPaginate, handelSearch, result];
};

export default SearchProductsHook;
