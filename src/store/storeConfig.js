import { combineReducers } from "redux";
import { createdReducers } from "./reducers";

export const reducers = combineReducers({
  ...createdReducers,
});
