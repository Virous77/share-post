import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import NewApp from "./NewApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <NewApp />
    </Provider>
  </React.StrictMode>
);
