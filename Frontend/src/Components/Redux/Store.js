import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./userRedux/login.reducer";
import { signupReducer } from "./userRedux/signup.reducer";
import { cartreducer } from "../../redux/reducers/reducer"
import skinReducer from "../Redux/skinRedux/skin.reducer"

let rootReducer = combineReducers({
  UserSignup: signupReducer,
  UserLogin: LoginReducer,
  skinProducts:skinReducer,
  cartreducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
