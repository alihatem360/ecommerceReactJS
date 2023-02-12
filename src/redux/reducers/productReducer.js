import {
  GEARTE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCT,
  GET_PRODUCT_DETAILS,
  GET_RELATED_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTBY_CATEGORY,
  GET_ALL_PRODUCTBY_BRAND,
} from "../types/categorytypes";

const initial = {
  product: [],
  allProducs: [],
  oneProduct: [],
  relatedProduct: [],
  deleteedProduct: [],
  updatedProduct: [],
  allProductByCategory: [],
  allProductByBrand: [],
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
    case GET_RELATED_PRODUCT:
      return {
        ...state,
        relatedProduct: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteedProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updatedProduct: action.payload,
        loading: false,
      };

    case GET_ALL_PRODUCTBY_CATEGORY:
      return {
        ...state,
        allProductByCategory: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTBY_BRAND:
      return {
        ...state,
        allProductByBrand: action.payload,
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
