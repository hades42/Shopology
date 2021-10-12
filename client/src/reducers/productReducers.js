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
  PRODUCT_ALL_FAIL
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

export const productAllReducer = (
  state = { products: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_ALL_REQUEST:
      return { loading: true, products: { reviews: [] } };
    case PRODUCT_ALL_SUCCESS:
      console.log(action.payload)
      return { 
        loading: false, 
        products: action.payload.data.pageProducts, 
        pageCount: action.payload.data.pageCount,
        electronicsCount: action.payload.data.electronicsCount,
        menCount: action.payload.data.menCount,
        womenCount: action.payload.data.womenCount,
        sportsCount: action.payload.data.sportsCount,
        babyCount: action.payload.data.babyCount,
        automobileCount: action.payload.data.automobileCount,
        booksCount: action.payload.data.booksCount,
        gamesCount: action.payload.data.gamesCount,
        blackCount: action.payload.data.blackCount,
        blueCount: action.payload.data.blueCount,
        redCount: action.payload.data.redCount,
        greenCount: action.payload.data.greenCount,
        brownCount: action.payload.data.brownCount,
        hundreadCount: action.payload.data.hundreadCount,
        okCount: action.payload.data.okCount,
        tkCount: action.payload.data.tkCount,
        thkCount: action.payload.data.thkCount,
        fkCount: action.payload.data.fkCount,
        fikCount: action.payload.data.fikCount
      };
    case PRODUCT_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

