import { combineReducers } from "redux";
import authReducer from "./authReducer";
import movieReducer from "./moveReduceer";
import detailReducer from "./detailReducer";

export default combineReducers({
  auth: authReducer,
  movie: movieReducer,
  detail: detailReducer,
});
