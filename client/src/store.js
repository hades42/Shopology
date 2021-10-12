import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productTrendingReducer,
  productTopReducer,
  productDetailReducer,
} from "./reducers/productReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
console.log(userInfoFromStorage);

const reducer = combineReducers({
  productTrending: productTrendingReducer,
  productTop: productTopReducer,
  productDetail: productDetailReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
