import { CREATE_USER, LOGIN_USER } from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";

export const createUser = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/auth/signup`, formData);
    console.log(respons, "reyern from action");
    dispatch({ type: CREATE_USER, payload: respons });
  } catch (error) {
    //  if there is an error in the server we will get the error in the response
    dispatch({ type: CREATE_USER, payload: error.response.data });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/auth/login`, formData);
    console.log(respons, "reyern from action");
    dispatch({ type: LOGIN_USER, payload: respons });
  } catch (error) {
    //  if there is an error in the server we will get the error in the response
    dispatch({ type: LOGIN_USER, payload: error.response });
  }
};
