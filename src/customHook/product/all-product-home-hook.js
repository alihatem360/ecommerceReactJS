import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/producAction";

const AllProductHomeHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [mostSoldProducts, setMostSoldProducts] = useState([]);
  const [famProducts, setFamProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      await dispatch(getAllProduct());
      setLoading(false);
    };
    getAllProducts();
  }, []);

  const allProducts = useSelector((state) => state.productReducer.allProducs);

  // let mostSoldProducts = [];
  // let famProducts = [];

  useEffect(() => {
    if (!loading) {
      try {
        if (allProducts.data) {
          setMostSoldProducts(allProducts.data.data.slice(0, 4));
          setFamProducts(allProducts.data.data.slice(4, 8));
        } else {
          setMostSoldProducts([]);
          setFamProducts([]);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [allProducts, loading]);

  return [mostSoldProducts, famProducts, allProducts];
};

export default AllProductHomeHook;
