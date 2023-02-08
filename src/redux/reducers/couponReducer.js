import {
  CREATE_COUPON,
  GET_ALL_COUPON,
  DELETE_COUPON,
  EDIT_COUPON,
  GET_SPECIFIC_COUPON,
} from "../types/categorytypes";

const initialState = {
  newCoupon: [],
  allCoupon: [],
  deleteCoupon: [],
  editCoupon: [],
  specificCoupon: [],
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COUPON:
      return {
        ...state,
        newCoupon: action.payload,
      };
    case GET_ALL_COUPON:
      return {
        ...state,
        allCoupon: action.payload,
      };

    case DELETE_COUPON:
      return {
        ...state,
        deleteCoupon: action.payload,
      };

    case EDIT_COUPON:
      return {
        ...state,
        editCoupon: action.payload,
      };

    case GET_SPECIFIC_COUPON:
      return {
        ...state,
        specificCoupon: action.payload,
      };

    default:
      return state;
  }
};

export default couponReducer;
