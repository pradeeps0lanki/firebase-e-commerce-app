import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/gContext";
import { PaymentProvider } from "./context/payment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider>
      <PaymentProvider>
        <ToastContainer />
        <App />
      </PaymentProvider>
    </Provider>
  </BrowserRouter>
);
