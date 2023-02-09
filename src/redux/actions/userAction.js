import {
  USER_ADD_ADDRESS,
  GET_ALL_ADDRESS,
  USER_DELETE_ADDRESS,
  USER_UPDATE_ADDRESS,
  GET_SPECIFIC_ADDRESS,
  UPDATE_USER_DATA,
  USER_CHANGE_PASSWORD,
} from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import { useGetDataWithToken } from "../../hook/useGetData";
import useDeleteDtat from "../../hook/useDeleteDtat";
import { useUpdateData } from "../../hook/useUpdateData";
// ==================  user add address action ==================
export const userAddAddress = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/addresses`, formData);
    dispatch({ type: USER_ADD_ADDRESS, payload: respons });
  } catch (error) {
    dispatch({ type: USER_ADD_ADDRESS, payload: error.response });
  }
};

// ==================  get all address action ==================

export const getAllAddress = () => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/addresses`);
    dispatch({ type: GET_ALL_ADDRESS, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ALL_ADDRESS, payload: error.response });
  }
};

// ==================  user delete address action ==================

export const userDeleteAddress = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteDtat(`/api/v1/addresses/${id}`);
    dispatch({ type: USER_DELETE_ADDRESS, payload: respons });
  } catch (error) {
    dispatch({ type: USER_DELETE_ADDRESS, payload: error.response });
  }
};

// ==================  user update address action ==================

export const userUpdateAddress = (id, formData) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/addresses/${id}`, formData);
    dispatch({ type: USER_UPDATE_ADDRESS, payload: respons });
  } catch (error) {
    dispatch({ type: USER_UPDATE_ADDRESS, payload: error.response });
  }
};

// ==================  get specific address action ==================

export const getSpecificAddress = (id) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/addresses/${id}`);
    dispatch({ type: GET_SPECIFIC_ADDRESS, payload: respons });
  } catch (error) {
    dispatch({ type: GET_SPECIFIC_ADDRESS, payload: error.response });
  }
};

// ================== update user data action ==================

export const updateUserData = (formData) => async (dispatch) => {
  try {
    const respons = await useUpdateData(`/api/v1/users/updateMe`, formData);
    dispatch({ type: UPDATE_USER_DATA, payload: respons });
  } catch (error) {
    dispatch({ type: UPDATE_USER_DATA, payload: error.response });
  }
};

// ==================  user Change password action ==================

export const userChangePassword = (formData) => async (dispatch) => {
  try {
    const respons = await useUpdateData(
      `/api/v1/users/changeMyPassword`,
      formData
    );
    dispatch({ type: USER_CHANGE_PASSWORD, payload: respons });
  } catch (error) {
    dispatch({ type: USER_CHANGE_PASSWORD, payload: error.response });
  }
};
