import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import App from "./App.js";
import reducer from "./reducers/index.js";

// 创建store
const store = createStore(reducer , applyMiddleware(logger,({dispatch,getState})=>{
    // alert(getState().counterReducer.a);
    return function(next){
        return function(action){
            console.warn(new Date());
            return next(action);
        }
    }
},thunk));

// alert(store.getState().counterReducer.a);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById("app")
);