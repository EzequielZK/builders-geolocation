import { combineReducers, createStore } from "redux";
import { createdReducers } from "./reducers";

const reducers = combineReducers({
  ...createdReducers,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
