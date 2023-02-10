import {
  ADD_TO_CART,
  GET_ALL_USER_CART,
  CLEAR_All_USER_CART,
  DELETE_CART_ITEM,
} from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import { useGetData } from "../../hook/useGetData";
import useDeleteData from "../../hook/useDeleteDtat";

export const addToCart = (productID) => async (dispatch) => {
  const respons = await useInsertData("/api/v1/cart", productID);
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART,
      payload: error,
    });
  }
};

// ================== get all user cart ==================

export const getAllUserCart = () => async (dispatch) => {
  const respons = await useGetData("/api/v1/cart");
  try {
    dispatch({
      type: GET_ALL_USER_CART,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_CART,
      payload: error,
    });
  }
};

// ==================  clear cart ==================

export const clearAllUserCart = () => async (dispatch) => {
  const respons = await useDeleteData("/api/v1/cart");
  try {
    dispatch({
      type: CLEAR_All_USER_CART,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: CLEAR_All_USER_CART,
      payload: error,
    });
  }
};
// ==================  delete cart item ==================

export const deleteCartItem = (id) => async (dispatch) => {
  const respons = await useDeleteData(`/api/v1/cart/${id}`);
  try {
    dispatch({
      type: DELETE_CART_ITEM,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CART_ITEM,
      payload: error,
    });
  }
};
