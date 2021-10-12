import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productTrendingReducer,
  productTopReducer,
  productDetailReducer,
  productAllReducer
} from "./reducers/productReducers";

const reducer = combineReducers({
  productTrending: productTrendingReducer,
  productTop: productTopReducer,
  productDetail: productDetailReducer,
  productAll: productAllReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
