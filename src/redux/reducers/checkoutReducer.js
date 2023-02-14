import { CREATE_CASH_ORDER } from "../types/categorytypes";

const initialState = {
  cashOrder: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CASH_ORDER:
      return {
        ...state,
        cashOrder: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
