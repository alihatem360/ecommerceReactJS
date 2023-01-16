import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const HomeCategoryHook = () => {
  const colors = [
    "#F4DBA5",
    "#0034FF",
    "#FFD3E8",
    "#55CFDF",
    "#FF6262",
    "#F4DBA5",
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
