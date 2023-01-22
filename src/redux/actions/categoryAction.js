import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  GEARTE_CATEGORY,
  GET_SPECIFIC_CATEGORY,
} from "../types/categorytypes";
import useGetData from "../../hook/useGetData";
import { useInsertDataWithImage } from "../../hook/useInsertData";

// ==================  get all category ==================
export const getAllCategory = (limit) => async (dispatch) => {
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

// ==================  get all category with pagination ==================
export const getAllCategoryPage = (page, limitPage) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=${limitPage}&page=${page} `
    );
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

// ==================  create category ==================
export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      "/api/v1/categories",
      formData
    );
    dispatch({
      type: GEARTE_CATEGORY,
      payload: response.data,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Something went wrong" + error,
    });
  }
};

//  ==================  get category by id ==================
export const getCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_SPECIFIC_CATEGORY,
      payload: response.data.data,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Something went wrong" + error,
    });
  }
};
