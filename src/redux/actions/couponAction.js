import {
  CREATE_COUPON,
  GET_ALL_COUPON,
  DELETE_COUPON,
  EDIT_COUPON,
  GET_SPECIFIC_COUPON,
} from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import { useGetDataWithToken } from "../../hook/useGetData";
import useDeleteDataa from "../../hook/useDeleteDtat";
import { useUpdateData } from "../../hook/useUpdateData";
import { useGetData } from "../../hook/useGetData";
// ==================  create coupon action ==================
export const createCoupon = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/coupons`, formData);
    dispatch({ type: CREATE_COUPON, payload: respons });
  } catch (error) {
    dispatch({ type: CREATE_COUPON, payload: error.response });
  }
};

// ==================  get all coupon action ==================

export const getAllCoupon = () => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/coupons`);
    dispatch({ type: GET_ALL_COUPON, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ALL_COUPON, payload: error.response });
  }
};

// ==================  delete coupon action ==================

export const deleteCoupon = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteDataa(`/api/v1/coupons/${id}`);
    dispatch({ type: DELETE_COUPON, payload: respons });
  } catch (error) {
    dispatch({ type: DELETE_COUPON, payload: error.response });
  }
};

// ==================  edit coupon action ==================

export const editCoupon = (id, formData) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/coupons/${id}`, formData);
    dispatch({ type: EDIT_COUPON, payload: respons });
  } catch (error) {
    dispatch({ type: EDIT_COUPON, payload: error.response });
  }
};

// ==================  get specific coupon action ==================

export const getSpecificCoupon = (id) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/coupons/${id}`);
    dispatch({ type: GET_SPECIFIC_COUPON, payload: respons });
  } catch (error) {
    dispatch({ type: GET_SPECIFIC_COUPON, payload: error.response });
  }
};
