import { ADD_TO_CART, GET_PRODUCT } from "./skin.types.js";
import axios from "axios";

export const getData = (token, page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`,
      { headers: { token: token } }
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
