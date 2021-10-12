import {
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TRENDING_FAIL,
  PRODUCT_TRENDING_REQUEST,
  PRODUCT_TRENDING_SUCCESS,
  PRODUCT_ALL_REQUEST,
  PRODUCT_ALL_SUCCESS,
  PRODUCT_ALL_FAIL
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

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProducts = (search = "", categoryFilter = "", colorFilter = "", priceFilter = "", sortBy = "", pageNum = "") => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ALL_REQUEST });
      const { data } = await axios.get(`/api/products/?search=${search}&categoryFilter=${categoryFilter}&colorFilter=${colorFilter}&priceFilter=${priceFilter}&sortBy=${sortBy}&pageNum=${pageNum}`)
    dispatch({
      type: PRODUCT_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};