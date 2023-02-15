import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneOrderDetails } from "../../redux/actions/orderAction";

const GetOneOrderHook = (id) => {
  const [order, setOrder] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // get one order
  useEffect(() => {
    setLoading(true);
    const getOneOrder = async () => {
      await dispatch(getOneOrderDetails(id));
    };
    getOneOrder();
    setLoading(false);
  }, [dispatch]);

  // get one order from redux
  const orderOne = useSelector((state) => state.orderReducer.oneOrderDetails);

  useEffect(() => {
    if (orderOne.data && !loading) {
      if (orderOne.status === 200) {
        setOrder(orderOne.data.data);
        setCartItems(orderOne.data.data.cartItems);
      }
    }
  }, [orderOne.data]);

  return [order, cartItems];
};

export default GetOneOrderHook;
