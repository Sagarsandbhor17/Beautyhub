import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./userRedux/login.reducer";
import { signupReducer } from "./userRedux/signup.reducer";
import {cartreducer} from "../../redux/reducers/reducer"

let rootReducer = combineReducers({
  UserSignup: signupReducer,
  UserLogin: LoginReducer,
  cartreducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
