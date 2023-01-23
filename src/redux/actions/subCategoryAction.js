import {
  CREATE_SUBCATEGORY,
  GET_ERROR,
  GET_SUBCATEGORY,
} from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import useGetData from "../../hook/useGetData";

export const createSubcategory = (subcategory) => async (dispatch) => {
  try {
    const respons = await useInsertData("/api/v1/subcategories", subcategory);
    dispatch({ type: CREATE_SUBCATEGORY, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

export const getSubcategory = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({ type: GET_SUBCATEGORY, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};
