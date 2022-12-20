import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./component/App";
import myStore from "./redux/Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
