import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
const SideFilterSearchHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(createCategory());
      await dispatch(getAllBrands());
    };
    getData();
  }, []);

  const allCategory = useSelector((state) => state.categoryReducer.categories);
  const allBrand = useSelector((state) => state.brandReducer.brands);

  const catItems = [];
  const brandItems = [];

  if (allCategory && allBrand) {
    console.log(allCategory, allBrand, "allCategory , allBrand");
    catItems = allCategory.data;
    brandItems = allBrand.data;
  }

  return [catItems, brandItems];
};

export default SideFilterSearchHook;
