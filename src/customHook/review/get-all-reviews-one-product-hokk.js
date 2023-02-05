import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviewsOneProduct } from "../../redux/actions/reviewAction";

const GettAllReviewsOneProductHook = (productId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  let limit = 3;
  // when the component is mounted fetch all reviews
  useEffect(() => {
    setLoading(true);
    dispatch(getAllReviewsOneProduct(productId, 1, limit));
    setLoading(false);
  }, []);

  const reriewResponse = useSelector(
    (state) => state.reviewReducer.allReviewsOneProduct
  );

  if (reriewResponse) {
    // console.log("reriewResponse", reriewResponse);
  }

  // when the page is changed fetch all reviews
  const onPress = (page) => {
    setLoading(true);
    dispatch(getAllReviewsOneProduct(productId, page, limit));
    // console.log("page", page);
    setLoading(false);
  };

  return [reriewResponse, loading, onPress];
};

export default GettAllReviewsOneProductHook;
