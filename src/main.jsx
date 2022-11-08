import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false}/>
        <App />
    </Provider>
  </Router>
);
