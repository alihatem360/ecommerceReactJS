import { CREATE_CASH_ORDER } from "../types/categorytypes";
import { useInsertData } from "../../hook/useInsertData";

// ==================  create cash order ==================
export const createCashOrder = (cartID, FormData) => async (dispatch) => {
  try {
    const respons = await useInsertData(`/api/v1/orders/${cartID}`, FormData);
    console.log(respons, "respons from action");
    dispatch({ type: CREATE_CASH_ORDER, payload: respons });
  } catch (error) {
    dispatch({ type: CREATE_CASH_ORDER, payload: error });
  }
};
