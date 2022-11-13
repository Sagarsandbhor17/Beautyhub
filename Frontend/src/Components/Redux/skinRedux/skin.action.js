import { ADD_TO_CART, GET_PRODUCT } from "./skin.types.js";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const getData = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `http://localhost:8080/products/skincare`,{Authorization:token}
    );
    // console.log(response);
    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
    });
    return response.data;
  } catch (r) {
    console.log(r.message);
  }
};


export const addtoCart = (elem) => async(dispatch) => {
  try {
    const token = localStorage.getItem("token");
    // console.log("product",elem._id);
    const tokenData = jwt_decode(token)
    // console.log(tokenData.id);
  const response = await axios.post(
    `http://localhost:8080/cart`, { product: elem._id, user: tokenData.id }, { headers: { Authorization:token } }
    );
    console.log(response);
    dispatch({
      type: ADD_TO_CART,
      payload: response.data
    });
    return response.data;
  } catch (r) {
    console.log(r.message);
  }
};
