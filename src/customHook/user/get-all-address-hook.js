import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAddress } from "../../redux/actions/userAction";

const GetAllAddressHook = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAddress = async () => {
      await dispatch(getAllAddress());
    };
    getAddress();
    setLoading(false);
  }, []);

  const addressList = useSelector((state) => state.userReducer.getAllAddress);

  useEffect(() => {
    if (!loading) {
      if (addressList.data) {
        setAddress(addressList.data);
      }
    }
  }, [addressList, loading]);

  return [address, loading];
};

export default GetAllAddressHook;
