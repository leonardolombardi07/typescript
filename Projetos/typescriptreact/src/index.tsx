import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { HomeScreen } from "./components/HomeScreen";
import { reducers } from "./redux/reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HomeScreen />
  </Provider>,
  document.querySelector("#root")
);
