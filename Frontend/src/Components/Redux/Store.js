import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./userRedux/login.reducer";
import { signupReducer } from "./userRedux/signup.reducer";
import { cartreducer } from "../../redux/reducers/reducer"
import skinReducer from "../Redux/skinRedux/skin.reducer"
import hairReducer from "../Redux/hairRedux/hair.reducer"
import bathReducer from "./bath&bodyRedux/bath&body.reducer";
import fragranceReducer from "./fragranceRedux/fragrance.reducer";

let rootReducer = combineReducers({
  UserSignup: signupReducer,
  UserLogin: LoginReducer,
  skinProducts: skinReducer,
  hairProducts:hairReducer,
  bathProducts:bathReducer,
  fragranceProducts:fragranceReducer,
  cartreducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
