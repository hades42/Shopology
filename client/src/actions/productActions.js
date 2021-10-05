import {
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TRENDING_FAIL,
  PRODUCT_TRENDING_REQUEST,
  PRODUCT_TRENDING_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";

export const trendingProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TRENDING_REQUEST });

    const { data } = await axios.get("/api/products/trending");
    dispatch({
      type: PRODUCT_TRENDING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_TRENDING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const topProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    const { data } = await axios.get("/api/products/top");
    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
