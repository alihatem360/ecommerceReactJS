import {
  GET_ALL_USER_ORDER,
  GET_ONE_ORDER_DETAILS,
  CHANGE_ORDER_PAAID,
  CHANGE_ORDER_DELIVERED,
} from "../types/categorytypes";
const initialState = {
  allUserOrder: [],
  oneOrderDetails: [],
  changePayStatus: [],
  changeDeliveredStatus: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_ORDER:
      return {
        ...state,
        allUserOrder: action.payload,
      };

    case GET_ONE_ORDER_DETAILS:
      return {
        ...state,
        oneOrderDetails: action.payload,
      };

    case CHANGE_ORDER_PAAID:
      return {
        ...state,
        changePayStatus: action.payload,
      };

    case CHANGE_ORDER_DELIVERED:
      return {
        ...state,
        changeDeliveredStatus: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
