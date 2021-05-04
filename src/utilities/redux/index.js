import { createStore, combineReducers, applyMiddleware } from "redux";
import message from "@utilities/redux/reducers/message.reducer";
import auth from "@utilities/redux/reducers/auth.reducer";
import dashboard from "@utilities/redux/reducers/dashboard.reducer";
import brands from "@utilities/redux/reducers/brands.reducer";
import thunk from "redux-thunk";

const logger = (store) => (next) => (action) => {
  console.log("Dispatching", action);
  let result = next(action);
  console.log("next state :>> ", store.getState());
  return result;
};

export default createStore(
  combineReducers({ auth, dashboard, message, brands }),
  applyMiddleware(logger, thunk)
);
