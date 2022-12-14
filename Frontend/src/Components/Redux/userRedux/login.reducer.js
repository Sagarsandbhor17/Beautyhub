import {
  user_login_loading,
  user_login_error,
  user_login_success,
  user_logout,
  AUTH_GOOGLE_SUCCESS,
} from "./login.type";

export const loginInitial = {
  loading: false,
  error: false,
  data: {
    Token: localStorage.getItem("token") || "",
    message: "",
    gAuth: JSON.parse(localStorage.getItem("email")) || "",
  },
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
      console.log('payload:', payload)
      if(payload.status){
        localStorage.setItem("token", payload.Token);
      }
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          Token: payload.Token,
          message: payload.message,
          gAuth: "",
        },
      };
    }

    case AUTH_GOOGLE_SUCCESS: {
      localStorage.setItem("email", JSON.stringify({email:payload.email,name:payload.name}));
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          Token: "",
          message: payload.message,
          gAuth: ({email:payload.email,name:payload.name}),
        },
      };
    }
    case user_logout: {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          Token: "",
          message: "",
          gAuth: "",
        },
      };
    }
    default:
      return state;
  }
};
