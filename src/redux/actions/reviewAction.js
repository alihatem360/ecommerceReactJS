import { CREATE_REVIEW } from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";

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
