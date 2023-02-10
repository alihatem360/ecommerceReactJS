import {
  ADD_TO_CART,
  GET_ALL_USER_CART,
  CLEAR_All_USER_CART,
  DELETE_CART_ITEM,
} from "../types/categorytypes";

const initialState = {
  cart: [],
  userCart: [],
  clearCart: [],
  deleteCartItem: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case GET_ALL_USER_CART:
      return {
        ...state,
        userCart: action.payload,
      };
    case CLEAR_All_USER_CART:
      return {
        ...state,
        clearCart: action.payload,
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        deleteCartItem: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
