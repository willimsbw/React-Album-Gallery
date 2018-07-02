import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers/index.js";
import thunk from "redux-thunk";

let middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

export default store;
