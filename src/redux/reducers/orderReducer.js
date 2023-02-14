import { GET_ALL_USER_ORDER } from "../types/categorytypes";

const initialState = {
  allUserOrder: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_ORDER:
      return {
        ...state,
        allUserOrder: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
