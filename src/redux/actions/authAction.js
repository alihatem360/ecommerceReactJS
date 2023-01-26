import { CREATE_USER } from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";

export const createUser = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/auth/signup`, formData);
    console.log(respons, "reyern from action");
    dispatch({ type: CREATE_USER, payload: respons });
  } catch (error) {
    dispatch({ type: CREATE_USER, payload: error.response.data });
  }
};
