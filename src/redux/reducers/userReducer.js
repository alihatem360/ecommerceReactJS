import { USER_ADD_ADDRESS, GET_ALL_ADDRESS } from "../types/categorytypes";

const initialState = {
  userAddAddress: [],
  getAllAddress: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ADD_ADDRESS:
      return {
        ...state,
        userAddAddress: action.payload,
      };
    case GET_ALL_ADDRESS:
      return {
        ...state,
        getAllAddress: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
