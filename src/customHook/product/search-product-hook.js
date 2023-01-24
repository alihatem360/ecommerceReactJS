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
  let storType = "",
    stor;
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

  // =================== handel search ===================
  const handelSearch = async () => {
    // get word from local storage
    let word = "";
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }
    // get sort type from handelStore
    handelStore();
    await dispatch(
      getAllProductSearch(
        `&limit=${limitPage}&page=${paginatePage}&keyword=${word}&sort=${stor}`
      )
    );
  };
  //  run handelSearch when component mount
  useEffect(() => {
    handelSearch();
  }, []);

  // =================== handel pagination ===================
  const handelPaginate = (page) => {
    let word = "";
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }
    setPaginatePage(page);
    handelStore();
    dispatch(
      getAllProductSearch(
        `&limit=${limitPage}&page=${page}&keyword=${word}&sort=${stor}`
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
      result = allProducts.data.results;
    } else {
      mostSoldProducts = [];
      pagination = [];
      result = 0;
    }
  } catch (error) {}
  return [mostSoldProducts, pagination, handelPaginate, handelSearch, result];
};

export default SearchProductsHook;
