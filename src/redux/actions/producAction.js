import { GEARTE_PRODUCT, GET_ERROR } from "../types/categorytypes";
import { useInsertDataWithImage } from "../../hook/useInsertData";

export const createProduct = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertDataWithImage("/api/v1/products", formData);
    dispatch({ type: GEARTE_PRODUCT, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};
