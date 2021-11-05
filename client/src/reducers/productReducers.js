import {
  PRODUCT_TRENDING_REQUEST,
  PRODUCT_TRENDING_SUCCESS,
  PRODUCT_TRENDING_FAIL,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_ALL_REQUEST,
  PRODUCT_ALL_SUCCESS,
  PRODUCT_ALL_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_FOR_SELLER_FAIL,
  PRODUCT_FOR_SELLER_REQUEST,
  PRODUCT_FOR_SELLER_SUCCESS,
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

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, product: { reviews: [] } };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productAllReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ALL_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_ALL_SUCCESS:
      return {
        loading: false,
        products: action.payload.pageProducts,
        pageCount: action.payload.pageCount,
        electronicsCount: action.payload.electronicsCount,
        menCount: action.payload.menCount,
        womenCount: action.payload.womenCount,
        sportsCount: action.payload.sportsCount,
        babyCount: action.payload.babyCount,
        automobileCount: action.payload.automobileCount,
        booksCount: action.payload.booksCount,
        gamesCount: action.payload.gamesCount,
        blackCount: action.payload.blackCount,
        blueCount: action.payload.blueCount,
        redCount: action.payload.redCount,
        greenCount: action.payload.greenCount,
        brownCount: action.payload.brownCount,
        hundreadCount: action.payload.hundreadCount,
        okCount: action.payload.okCount,
        tkCount: action.payload.tkCount,
        thkCount: action.payload.thkCount,
        fkCount: action.payload.fkCount,
        fikCount: action.payload.fikCount,
      };
    case PRODUCT_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productForSellerReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_FOR_SELLER_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_FOR_SELLER_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_FOR_SELLER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const reviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DELETE_RESET:
      return { success: false };
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productCreateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return { success: false };
    default:
      return state;
  }
};
