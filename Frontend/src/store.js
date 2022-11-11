import { legacy_createStore } from "redux";
import rootreducer from "./redux/reducers/main";
const store = legacy_createStore(rootreducer);

export default store;

