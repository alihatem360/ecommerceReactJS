import {
  CREATE_REVIEW,
  GET_ALL_REVIEWS_ONE_PRODUCT,
  DELETE_REVIEW,
  EDIT_REVIEW,
} from "../types/categorytypes";

const initial = {
  review: [],
  allReviewsOneProduct: [],
  deletedReview: [],
  updatedReview: [],
  isLoding: true,
};

const reviewReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        review: action.payload,
        isLoding: false,
      };
    case GET_ALL_REVIEWS_ONE_PRODUCT:
      return {
        ...state,
        allReviewsOneProduct: action.payload,
        isLoding: false,
      };

    case DELETE_REVIEW:
      return {
        ...state,
        deletedReview: action.payload,
        isLoding: false,
      };

    case EDIT_REVIEW:
      return {
        ...state,
        updatedReview: action.payload,
        isLoding: false,
      };

    default:
      return state;
  }
};

export default reviewReducer;
