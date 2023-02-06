import {
  GET_USER_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import useDeleteDataa from "../../hook/useDeleteDtat";
import { useGetDataWithToken } from "../../hook/useGetData";
//  ==================  add to wishlist action ==================
export const addToWishList = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/wishlist`, formData);
    // print(respons);
    dispatch({ type: ADD_TO_WISHLIST, payload: respons });
  } catch (error) {
    dispatch({ type: ADD_TO_WISHLIST, payload: error.response });
  }
};

//  ==================  remove from wishlist action ==================

export const removeFromWishList = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteDataa(`/api/v1/wishlist/${id}`);
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: respons });
  } catch (error) {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: error.response });
  }
};

//  ==================  get user wishlist action ==================

export const getUserWishList = () => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(`/api/v1/wishlist`);
    console.log(respons, "respons");
    dispatch({ type: GET_USER_WISHLIST, payload: respons });
  } catch (error) {
    dispatch({ type: GET_USER_WISHLIST, payload: error.response });
  }
};
