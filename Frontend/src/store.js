import { legacy_createStore as createStore, legacy_createStore } from "redux";
import rootreducer from "./redux/reducers/main";
const store = legacy_createStore(rootreducer);

export default store;

