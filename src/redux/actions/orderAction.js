import { GET_ALL_USER_ORDER } from "../types/categorytypes";
import { useGetData } from "../../hook/useGetData";

// ================== get all user order ==================
export const getAllUserOrder = () => async (dispatch) => {
  const respons = await useGetData("/api/v1/orders");
  try {
    dispatch({
      type: GET_ALL_USER_ORDER,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_ORDER,
      payload: error,
    });
  }
};
