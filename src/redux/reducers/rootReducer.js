import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authreduccer from "./authReducer";
export default combineReducers({
  categoryReducer,
  brandReducer,
  subcategoryReducer,
  productReducer,
  authreduccer,
});
