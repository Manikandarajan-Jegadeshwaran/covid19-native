import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createReducer from "./global-reducer";

const store = createStore(createReducer(), applyMiddleware(thunk));

store.asyncReducers = {};

const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return;
  }

  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;
export { injectReducer };
