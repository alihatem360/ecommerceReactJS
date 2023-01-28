import { CREATE_USER, LOGIN_USER } from "../types/categorytypes";

const initialState = {
  createdUser: [],
  loginUser: [],
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

    default:
      return state;
  }
};

export default authreduccer;
