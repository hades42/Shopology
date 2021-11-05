import {
  REQUEST_SELLER_REQUEST,
  REQUEST_SELLER_SUCCESS,
  REQUEST_SELLER_FAIL,
  REQUEST_SELLER_RESET,
  GET_REQUEST_SELLER_REQUEST, 
  GET_REQUEST_SELLER_SUCCESS, 
  GET_REQUEST_SELLER_FAIL, 
  GET_DESC_REQUEST_SELLER_REQUEST,
  GET_DESC_REQUEST_SELLER_SUCCESS,
  GET_DESC_REQUEST_SELLER_FAIL,
  APPROVE_SELLER_REQUEST,
  APPROVE_SELLER_SUCCESS,
  APPROVE_SELLER_FAIL,
  APPROVE_SELLER_RESET,
} from "../constants/requestConstant";


export const requestSellerReducer = (state = { }, action) => {
  switch (action.type) {
    case REQUEST_SELLER_REQUEST:
      return { loading: true };
    case REQUEST_SELLER_SUCCESS:
      return { loading: false, success: true };
    case REQUEST_SELLER_FAIL:
      return { loading: false, error: action.payload };
    case REQUEST_SELLER_RESET:
      return { request: {} };
    default:
      return state;
  }
};

export const getRequestSellerReducer = (state = { request: [] }, action) => {
    switch (action.type) {
        case GET_REQUEST_SELLER_REQUEST:
            return { loading: true , request: [] };
        case GET_REQUEST_SELLER_SUCCESS:
            return { loading: false, request: action.payload }
        case GET_REQUEST_SELLER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const getRequestByIdReducer = (state = { request: {} }, action) => {
  switch (action.type) {
      case GET_DESC_REQUEST_SELLER_REQUEST:
          return { loading: true , request: {} };
      case GET_DESC_REQUEST_SELLER_SUCCESS:
          return { loading: false, request: action.payload }
      case GET_DESC_REQUEST_SELLER_FAIL:
          return { loading: false, error: action.payload }
      default:
          return state;
  }
}

export const approveRequestReducer = (state = { }, action) => {
  switch (action.type) {
      case APPROVE_SELLER_REQUEST:
          return { loading: true };
      case APPROVE_SELLER_SUCCESS:
          return { loading: false, success: true }
      case APPROVE_SELLER_FAIL:
          return { loading: false, error: action.payload }
      case APPROVE_SELLER_RESET:
          return { }
      default:
          return state;
  }
}