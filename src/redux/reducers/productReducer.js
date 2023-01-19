import { GEARTE_PRODUCT, GET_ERROR } from "../types/categorytypes";

const initial = {
  product: [],
  loading: true,
};

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case GEARTE_PRODUCT:
      return {
        ...state,
        product: action.payload,
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
