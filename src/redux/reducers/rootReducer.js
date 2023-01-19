import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
export default combineReducers({
  categoryReducer,
  brandReducer,
  subcategoryReducer,
  productReducer,
});
