import {
  CREATE_USER,
  LOGIN_USER,
  GET_LOGGED_USER,
  FORGET_PASSWORD,
  VERIFY_CODE,
  RESET_PASSWORD,
} from "../types/categorytypes";

const initialState = {
  createdUser: [],
  loginUser: [],
  loggedUser: [],
  resetCode: [],
  verifyCode: [],
  resetPassword: [],
};

const authreduccer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        createdUser: action.payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };
    case GET_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        resetCode: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };
    case VERIFY_CODE:
      return {
        ...state,
        verifyCode: action.payload,
      };

    default:
      return state;
  }
};

export default authreduccer;
