import { CREATE_USER } from "../types/categorytypes";

const initialState = {
  createdUser: [],
};

const authreduccer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        createdUser: action.payload,
      };
    default:
      return state;
  }
};

export default authreduccer;
