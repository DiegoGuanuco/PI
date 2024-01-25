import { createStore } from "redux";
import reducer from "./reducer";

//REDUX-THUNK
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
