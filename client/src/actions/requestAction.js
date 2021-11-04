import {
  REQUEST_SELLER_REQUEST,
  REQUEST_SELLER_SUCCESS,
  REQUEST_SELLER_FAIL,
  REQUEST_SELLER_RESET,
} from "../constants/requestConstant";

import axios from "axios";


export const createRequest = (request) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_SELLER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/request/newSeller`, request, config);
    console.log(data);

    dispatch({
      type: REQUEST_SELLER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_SELLER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
