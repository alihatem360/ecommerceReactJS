import {
  GETT_ALL_BRAND,
  GEARTE_BRAND,
  GET_ERROR,
  GETT_SPECIFIC_BRAND,
} from "../types/categorytypes";
const initial = {
  brands: [],
  onBrand: [],
  isloading: true,
};

const brandReducer = (state = initial, action) => {
  switch (action.type) {
    case GETT_ALL_BRAND:
      return {
        ...state,
        brands: action.payload,
        isloading: false,
      };
    case GEARTE_BRAND:
      return {
        brands: action.payload,
        isloading: false,
      };
    case GETT_SPECIFIC_BRAND:
      return {
        onBrand: action.payload,
        isloading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        brands: action.payload,
        isloading: false,
      };
    default:
      return state;
  }
};

export default brandReducer;
