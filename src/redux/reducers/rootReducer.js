import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authreduccer from "./authReducer";
import reviewReducer from "./reviewReducer";
export default combineReducers({
  categoryReducer,
  brandReducer,
  subcategoryReducer,
  productReducer,
  authreduccer,
  reviewReducer,
});
