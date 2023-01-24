import { useEffect } from "react";
import { useState } from "react";
import SearchProductsHook from "../product/search-product-hook";
const NavBarSearchHook = () => {
  const [mostSoldProducts, pagination, handelPaginate, handelSearch] =
    SearchProductsHook();
  // the porpuse of this searchWord dispatch handelSearch is to run handelSearch when searchWord change
  //  not to store searchWord
  // becuase we store searchWord in local storage
  const [searchWord, setSearchWord] = useState("");

  const onChangeSearchWord = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    handelSearch();
  }, [searchWord]);

  return [searchWord, onChangeSearchWord];
};

export default NavBarSearchHook;
