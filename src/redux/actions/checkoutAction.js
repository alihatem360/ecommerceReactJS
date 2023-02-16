import { CREATE_CASH_ORDER, CREATE_CARD_ORDER } from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";
import { useGetDataWithToken } from "../../hook/useGetData";

// ==================  create cash order ==================
export const createCashOrder = (cartID, FormData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/orders/${cartID}`, FormData);
    dispatch({ type: CREATE_CASH_ORDER, payload: respons });
  } catch (error) {
    dispatch({ type: CREATE_CASH_ORDER, payload: error });
  }
};

// ==================  create card order ==================

export const createCARDOrder = (cartID, FormData) => async (dispatch) => {
  try {
    const respons = await useGetDataWithToken(
      `/api/v1/orders/checkout-session/${cartID}`,
      FormData
    );
    dispatch({ type: CREATE_CARD_ORDER, payload: respons.data });
  } catch (error) {
    dispatch({ type: CREATE_CARD_ORDER, payload: error });
  }
};
