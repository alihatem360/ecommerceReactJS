import { USER_ADD_ADDRESS, GET_ALL_ADDRESS } from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import { useGetDataWithToken } from "../../hook/useGetData";
// ==================  user add address action ==================
export const userAddAddress = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/addresses`, formData);
    dispatch({ type: USER_ADD_ADDRESS, payload: respons });
  } catch (error) {
    dispatch({ type: USER_ADD_ADDRESS, payload: error.response });
  }
};

// ==================  get all address action ==================

export const getAllAddress = () => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/addresses`);
    dispatch({ type: GET_ALL_ADDRESS, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ALL_ADDRESS, payload: error.response });
  }
};
