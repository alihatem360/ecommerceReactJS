import { CREATE_SUBCATEGORY, GET_ERROR } from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";

export const createSubcategory = (subcategory) => async (dispatch) => {
  try {
    const respons = await useInsertData("/api/v1/subcategories", subcategory);
    dispatch({ type: CREATE_SUBCATEGORY, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};
