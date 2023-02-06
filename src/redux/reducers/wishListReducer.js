import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  GET_USER_WISHLIST,
} from "../types/categorytypes";

const initial = {
  wishList: [],
  removedWishList: [],
  userWishList: [],
  isLoding: true,
};

const wishListReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: action.payload,
        isLoding: false,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removedWishList: action.payload,
        isLoding: false,
      };
    case GET_USER_WISHLIST:
      return {
        ...state,
        userWishList: action.payload,
        isLoding: false,
      };
    default:
      return state;
  }
};

export default wishListReducer;
