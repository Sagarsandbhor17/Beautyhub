import {
  user_signup_loading,
  user_signup_success,
  user_signup_error,
} from "./signup.type";

import axios from "axios";

export const SignupApi = (formData) => async (dispatch) => {
  // console.log('formData: ', formData);
  dispatch({ type: user_signup_loading });
  try {
    let res = await axios.post("https://backend-beautyhub-production.up.railway.app/users/signup", formData);
    dispatch({ type: user_signup_success, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: user_signup_error });
  }
};
