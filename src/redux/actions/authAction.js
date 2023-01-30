import {
  CREATE_USER,
  LOGIN_USER,
  GET_LOGGED_USER,
  FORGET_PASSWORD,
  VERIFY_CODE,
  RESET_PASSWORD,
} from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import { useGetDataWithToken } from "../../hook/useGetData";
import { useUpdateData } from "../../hook/useUpdateData";
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

// ==================  Get Logged User ==================

export const getLoggedUser = () => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/users/getMe`);
    dispatch({ type: GET_LOGGED_USER, payload: respons.data });
  } catch (error) {
    dispatch({
      type: GET_LOGGED_USER,
      payload: "Something went wrong" + error,
    });
  }
};

// ==================  ForgetPassword ==================

export const forgetPassword = (email) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/auth/forgotPasswords`, email);
    dispatch({ type: FORGET_PASSWORD, payload: respons });
  } catch (error) {
    dispatch({ type: FORGET_PASSWORD, payload: error.response.data });
  }
};

// ==================  Verify Code ==================

export const verifyCode = (code) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/auth/verifyResetCode`, code);
    dispatch({ type: VERIFY_CODE, payload: respons });
  } catch (error) {
    dispatch({ type: VERIFY_CODE, payload: error.response.data });
  }
};

// ==================  Reset Password ==================

export const resetPassword = (password) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/auth/resetPassword`, password);
    dispatch({ type: RESET_PASSWORD, payload: respons });
  } catch (error) {
    dispatch({ type: RESET_PASSWORD, payload: error.response.data });
  }
};
