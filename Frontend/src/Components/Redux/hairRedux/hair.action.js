import { ADD_TO_CART, GET_PRODUCT } from "./hair.type.js";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const getData = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://backend-beautyhub-production.up.railway.app/products/hairs`,
      { Authorization: token }
    );
    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
    });
    return response.data;
  } catch (r) {
    console.log(r.message);
  }
};

export const addtoCart = (elem) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const tokenData = jwt_decode(token);
    const response = await axios.post(
      `https://backend-beautyhub-production.up.railway.app/cart`,
      { product: elem._id, user: tokenData.id, Id: tokenData.id },
      { headers: { Authorization: token } }
    );
    console.log(response);
    dispatch({
      type: ADD_TO_CART,
      payload: response.data,
    });
    return response.data;
  } catch (r) {
    console.log(r.message);
  }
};
