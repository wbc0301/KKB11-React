import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { counterReducer } from "./reducer";

const store = createStore(
    combineReducers({counter: counterReducer}), // 合并reducer
    applyMiddleware(logger, thunk)    // 使用中间件
);

export default store;
