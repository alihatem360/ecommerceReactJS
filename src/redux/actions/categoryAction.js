import { GET_ALL_CATEGORY, GET_ERROR } from "../types/categorytypes";
import useGetData from "../../hook/useGetData";
const getAllCategory = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Something went wrong" + error,
    });
  }
};

export default getAllCategory;
