import { CREATE_CASH_ORDER, CREATE_CARD_ORDER } from "../types/categorytypes";

const initialState = {
  cashOrder: [],
  cardOrder: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CASH_ORDER:
      return {
        ...state,
        cashOrder: action.payload,
      };
    case CREATE_CARD_ORDER:
      return {
        ...state,
        cardOrder: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
