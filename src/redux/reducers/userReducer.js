import {
  USER_ADD_ADDRESS,
  GET_ALL_ADDRESS,
  USER_DELETE_ADDRESS,
  USER_UPDATE_ADDRESS,
  GET_SPECIFIC_ADDRESS,
  UPDATE_USER_DATA,
  USER_CHANGE_PASSWORD,
} from "../types/categorytypes";

const initialState = {
  userAddAddress: [],
  getAllAddress: [],
  userDeleteAddress: [],
  UpdatedAddress: [],
  getSpecificAddress: [],
  updatedUser: [],
  changedPassword: [],
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

    case USER_DELETE_ADDRESS:
      return {
        ...state,
        userDeleteAddress: action.payload,
      };

    case USER_UPDATE_ADDRESS:
      return {
        ...state,
        UpdatedAddress: action.payload,
      };

    case GET_SPECIFIC_ADDRESS:
      return {
        ...state,
        getSpecificAddress: action.payload,
      };

    case UPDATE_USER_DATA:
      return {
        ...state,
        updatedUser: action.payload,
      };

    case USER_CHANGE_PASSWORD:
      return {
        ...state,
        changedPassword: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
