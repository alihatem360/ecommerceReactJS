import {
  CREATE_REVIEW,
  GET_ALL_REVIEWS_ONE_PRODUCT,
  DELETE_REVIEW,
  EDIT_REVIEW,
} from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import { useGetDataWithToken } from "../../hook/useGetData";
import useDeleteDataa from "../../hook/useDeleteDtat";
import { useUpdateData } from "../../hook/useUpdateData";
export const createReview = (productId, formData) => async (dispatch) => {
  try {
    const respons = await useInsertData(
      `/api/v1/products/${productId}/reviews`,
      formData
    );
    dispatch({ type: CREATE_REVIEW, payload: respons });
  } catch (error) {
    dispatch({ type: CREATE_REVIEW, payload: error.response });
  }
};

export const getAllReviewsOneProduct =
  (productId, page, limit) => async (dispatch) => {
    try {
      const respons = await useGetDataWithToken(
        `/api/v1/products/${productId}/reviews?page=${page}&limit=${limit}`
      );

      dispatch({ type: GET_ALL_REVIEWS_ONE_PRODUCT, payload: respons });
    } catch (error) {
      dispatch({ type: GET_ALL_REVIEWS_ONE_PRODUCT, payload: error.response });
    }
  };

//  ==================  delete review ==================

export const deleteReview = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteDataa(`/api/v1/reviews/${id}`);

    dispatch({ type: DELETE_REVIEW, payload: respons });
  } catch (error) {
    dispatch({ type: DELETE_REVIEW, payload: error.response });
  }
};

// ==================  edit review ==================

export const editReview = (id, formData) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/reviews/${id}`, formData);

    dispatch({ type: EDIT_REVIEW, payload: respons });
  } catch (error) {
    dispatch({ type: EDIT_REVIEW, payload: error.response });
  }
};
