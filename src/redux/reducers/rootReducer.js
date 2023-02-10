import { combineReducers } from "redux";
// all reducers
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authreduccer from "./authReducer";
import reviewReducer from "./reviewReducer";
import couponReducer from "./couponReducer";
import wishListReducer from "./wishListReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
export default combineReducers({
  categoryReducer,
  brandReducer,
  subcategoryReducer,
  productReducer,
  authreduccer,
  reviewReducer,
  wishListReducer,
  couponReducer,
  userReducer,
  cartReducer,
});
