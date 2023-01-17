import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandAction";

const BrandHomeHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands(6));
  }, []);

  const brands = useSelector((state) => state.brandReducer.brands);
  const loading = useSelector((state) => state.brandReducer.isloading);

  if (brands) {
    console.log(brands, "brands", loading, "loading");
  }

  return [brands, loading];
};

export default BrandHomeHook;
