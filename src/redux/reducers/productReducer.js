import {
  GEARTE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCT,
  GET_PRODUCT_DETAILS,
} from "../types/categorytypes";

const initial = {
  product: [],
  loading: true,
  allProducs: [],
  oneProduct: [],
};

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case GEARTE_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case GET_ALL_PRODUCT:
      return {
        ...state,
        allProducs: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
