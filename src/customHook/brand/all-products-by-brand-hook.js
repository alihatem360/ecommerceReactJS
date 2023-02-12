import { getAllProductByBrand } from "../../redux/actions/producAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const AllProductsByBrandHook = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationResult, setPaginationResult] = useState([]);
  const [page, setPage] = useState(1);

  const handelPaginate = (pageNumber) => {
    setPage(pageNumber);
  };

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const getAllProductsByCategory = async () => {
      setLoading(true);
      await dispatch(getAllProductByBrand(8, page, id));
      setLoading(false);
    };
    getAllProductsByCategory();
  }, [page, id]);

  // get all products by category
  const allProductsByCategory = useSelector(
    (state) => state.productReducer.allProductByBrand
  );

  useEffect(() => {
    if (!loading) {
      if (allProductsByCategory.status === 200) {
        setProducts(allProductsByCategory.data.data);
        setPaginationResult(allProductsByCategory.data.paginationResult);
      }
    }
  }, [allProductsByCategory, loading]);

  return [loading, products, paginationResult, handelPaginate];
};

export default AllProductsByBrandHook;
