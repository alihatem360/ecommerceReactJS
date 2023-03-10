import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  GEARTE_CATEGORY,
  GET_SPECIFIC_CATEGORY,
} from "../types/categorytypes";

const initial = {
  categories: [],
  onCategory: [],
  isLoding: true,
};

const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        isLoding: false,
      };
    case GEARTE_CATEGORY:
      return {
        categories: action.payload,
        isLoding: false,
      };
    case GET_SPECIFIC_CATEGORY:
      return {
        onCategory: action.payload,
        isLoding: false,
      };
    case GET_ERROR:
      return {
        ...state,
        isLoding: true,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
