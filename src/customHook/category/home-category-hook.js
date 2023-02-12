import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const HomeCategoryHook = () => {
  const colors = [
    "rgb(85 207 223 / 34%)",
    "rgb(255 211 232 / 71%)",
    "rgb(0 52 255 / 37%) ",
    "rgb(244 219 165 / 65%) ",
    "#ff62628c ",
    "#f4dba5cc",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.isLoding);

  return [category, loading, colors];
};

export default HomeCategoryHook;
