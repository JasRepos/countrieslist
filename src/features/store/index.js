import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({});

const middlewares = [thunk];

const initialState = {
  countries: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
