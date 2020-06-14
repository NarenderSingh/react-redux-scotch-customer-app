import customerReducer from "../reducers/customerReducer";
import { combineReducers } from "redux";

const reducers = {
  customer : customerReducer
};

export const rootReducer = combineReducers(reducers);