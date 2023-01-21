import {
  GEARTE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCT,
  GET_PRODUCT_DETAILS,
} from "../types/categorytypes";
import { useInsertDataWithImage } from "../../hook/useInsertData";
import useGetData from "../../hook/useGetData";

export const createProduct = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertDataWithImage("/api/v1/products", formData);
    dispatch({ type: GEARTE_PRODUCT, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

export const getAllProduct = () => async (dispatch) => {
  try {
    const respons = await useGetData("/api/v1/products");
    dispatch({ type: GET_ALL_PRODUCT, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products/${id}`);
    dispatch({ type: GET_PRODUCT_DETAILS, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};
