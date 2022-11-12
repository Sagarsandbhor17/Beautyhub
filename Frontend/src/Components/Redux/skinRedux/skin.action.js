import { ADD_TO_CART, GET_PRODUCT } from "./skin.types.js";
import axios from "axios";

export const getData = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `http://localhost:8080/products/skincare`,{Authorization:token}
    );
    console.log(response);
    dispatch({
      type: GET_PRODUCT,
      payload: response.data,
      totalPages: response.data.totalPages,
    });
    return response.data;
  } catch (r) {
    console.log(r.message);
  }
};


export const addtoCart = (elem) => async(dispatch) => {
try {
  const token = localStorage.getItem("token");
  const response = await axios.post(
      `http://localhost:8080/cart`,{product:elem,Authorization:token}
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
