import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./slices/store";
import { BrowserRouter } from "react-router-dom";
import IntroProvider from "./Context/IntroContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <IntroProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntroProvider>
  </Provider>
);
