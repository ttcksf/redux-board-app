import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
//postSliceのReducerをpostsReducerという名前でインポートする
import postsReducer from "./features/Posts.js";

//storeを作成
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
//storeを全体で使用できるようにする
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
