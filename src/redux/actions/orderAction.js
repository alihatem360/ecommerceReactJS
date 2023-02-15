import {
  GET_ALL_USER_ORDER,
  GET_ONE_ORDER_DETAILS,
  CHANGE_ORDER_PAAID,
  CHANGE_ORDER_DELIVERED,
} from "../types/categorytypes";
import { useGetData } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { useUpdateData } from "../../hook/useUpdateData";

// ================== get all user order ==================
export const getAllUserOrder = (limit, page) => async (dispatch) => {
  const respons = await useGetData(
    `/api/v1/orders?limit=${limit}&page=${page}`
  );
  try {
    dispatch({
      type: GET_ALL_USER_ORDER,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_ORDER,
      payload: error,
    });
  }
};

// ================== get oneOrder details ==================

export const getOneOrderDetails = (id) => async (dispatch) => {
  const respons = await useGetData(`/api/v1/orders/${id}`);
  try {
    dispatch({
      type: GET_ONE_ORDER_DETAILS,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_ORDER_DETAILS,
      payload: error,
    });
  }
};

// ================== change order status paid ==================

export const changeOrderStatusPaid = (id) => async (dispatch) => {
  const respons = await useUpdateData(`/api/v1/orders/${id}/pay`);
  try {
    dispatch({
      type: CHANGE_ORDER_PAAID,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_ORDER_PAAID,
      payload: error,
    });
  }
};

// ================== change order status driver ==================

export const changeOrderStatusDlivered = (id) => async (dispatch) => {
  const respons = await useUpdateData(`/api/v1/orders/${id}/deliver`);
  try {
    dispatch({
      type: CHANGE_ORDER_DELIVERED,
      payload: respons,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_ORDER_DELIVERED,
      payload: error,
    });
  }
};
