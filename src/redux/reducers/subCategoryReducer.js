import { CREATE_SUBCATEGORY, GET_ERROR } from "../types/categorytypes";

const initial = {
  subcategory: [],
  loading: true,
};

const subcategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_SUBCATEGORY:
      return {
        ...state,
        subcategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        subcategory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default subcategoryReducer;
