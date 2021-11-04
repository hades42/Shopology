import {
  REQUEST_SELLER_REQUEST,
  REQUEST_SELLER_SUCCESS,
  REQUEST_SELLER_FAIL,
  REQUEST_SELLER_RESET,
} from "../constants/requestConstant";


export const requestSellerReducer = (state = { }, action) => {
  switch (action.type) {
    case REQUEST_SELLER_REQUEST:
      return { loading: true };
    case REQUEST_SELLER_SUCCESS:
      return { loading: false, success: true };
    case REQUEST_SELLER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};