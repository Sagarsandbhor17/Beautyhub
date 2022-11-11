import axios from "axios";
import {
  user_login_loading,
  user_login_error,
  user_login_success,
  user_logout,
} from "./login.type";

export const userLogin = (formData) => async (dispatch) => {
  dispatch({ type: user_login_loading });

  try {
    let res = await axios.post("http://localhost:8080/user/login", formData);
    dispatch({ type: user_login_success, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: user_login_error });
  }
};

export const userLogout = () => ({ type: user_logout });
