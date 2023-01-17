import {
  GETT_ALL_BRAND,
  GEARTE_BRAND,
  GET_ERROR,
} from "../types/categorytypes";
import useGetData from "../../hook/useGetData";
import { useInsertDataWithImage } from "../../hook/useInsertData";

export const getAllBrands = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: GETT_ALL_BRAND,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Something went wrong" + error,
    });
  }
};

export const getAllBrandsPage = (page, limitPage) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/brands?limit=${limitPage}&page=${page} `
    );
    dispatch({
      type: GETT_ALL_BRAND,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Something went wrong" + error,
    });
  }
};

export const createBrand = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImage("/api/v1/brands", formData);
    dispatch({
      type: GEARTE_BRAND,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Something went wrong" + error,
    });
  }
};
