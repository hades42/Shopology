import {
  PRODUCT_TRENDING_REQUEST,
  PRODUCT_TRENDING_SUCCESS,
  PRODUCT_TRENDING_FAIL,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
} from "../constants/productConstants";

export const productTrendingReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TRENDING_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TRENDING_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TRENDING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productTopReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
