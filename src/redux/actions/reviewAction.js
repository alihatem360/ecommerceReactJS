import {
  CREATE_REVIEW,
  GET_ALL_REVIEWS_ONE_PRODUCT,
  DELETE_REVIEW,
  GET_ERROR,
} from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import { useGetDataWithToken } from "../../hook/useGetData";
import useDeleteDataa from "../../hook/useDeleteDtat";
import axios from "axios";

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
    // delete review using axios wth token from local storage
    // const respons = await axios.delete(
    //   `http://127.0.0.1:8000/api/v1/reviews/${id}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   }
    // );

    // delete review using custom hook

    const respons = await useDeleteDataa(`/api/v1/reviews/${id}`);

    dispatch({ type: DELETE_REVIEW, payload: respons });
  } catch (error) {
    dispatch({ type: DELETE_REVIEW, payload: error.response });
  }
};
