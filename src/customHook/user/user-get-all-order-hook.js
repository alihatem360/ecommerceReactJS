import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserOrder } from "../../redux/actions/orderAction";
const UserGetAllOrderHook = () => {
  // get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  let userName = "";
  if (user) {
    userName = user.name;
  }
  const [order, setOrder] = useState([]);
  const [paginationResult, setPaginationResult] = useState([]);
  const [results, setResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(2);
  const dispatch = useDispatch();
  // get all user order
  useEffect(() => {
    const getAllOrder = async () => {
      setLoading(true);
      await dispatch(getAllUserOrder(limit, 1));
      setLoading(false);
    };
    getAllOrder();
  }, [dispatch]);

  const handelPaginate = async (page) => {
    setLoading(true);
    await dispatch(getAllUserOrder(limit, page));
    setLoading(false);
  };
  // get all user order from redux
  const orderOne = useSelector((state) => state.orderReducer.allUserOrder);
  //   if (orderOne) {
  //     console.log(orderOne, "orderOne.data");
  //   }

  useEffect(() => {
    if (!loading) {
      if (orderOne.data) {
        if (orderOne.data.data) {
          setOrder(orderOne.data.data);
        }
        if (orderOne.data.paginationResult) {
          setPaginationResult(orderOne.data.paginationResult);
        }
        if (orderOne.data.results) {
          setResults(orderOne.data.results);
        }
      }
    }
  }, [orderOne.data, loading]);

  return [userName, order, paginationResult, results, handelPaginate];
};

export default UserGetAllOrderHook;
