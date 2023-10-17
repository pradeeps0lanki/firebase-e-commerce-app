import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/gContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <ToastContainer />
        <App />
      </Elements>
    </BrowserRouter>
  </Provider>
);
