import { CREATE_REVIEW } from "../types/categorytypes";

const initial = {
  review: [],
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

    default:
      return state;
  }
};

export default reviewReducer;
