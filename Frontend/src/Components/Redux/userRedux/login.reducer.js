import {
  user_login_loading,
  user_login_error,
  user_login_success,
  user_logout,
} from "./login.type";


export const loginInitial = {
  loading: false,
  error: false,
  data: { Token:localStorage.getItem("token") || "", message: "" },
};

export const LoginReducer = (state = loginInitial, { type, payload }) => {
  switch (type) {
    case user_login_loading: {
      return {
        ...state,
        loading: true,
        error: false,
        data: {},
      };
    }
    case user_login_error: {
      return {
        ...state,
        loading: false,
        error: true,
        data: {},
      };
    }
    case user_login_success: {
      localStorage.setItem("token", payload.Token);
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          Token: payload.Token,
          message: payload.message,
        },
      };
    }

    case user_logout: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          Token: "",
          message: "",
        },
      };
    }
    default:
      return state;
  }
};
