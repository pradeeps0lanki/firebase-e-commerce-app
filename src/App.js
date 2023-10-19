import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";
import AllRoutes from "./routes/AllRoutes";

function App() {
  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");

  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };

  //     document.body.appendChild(script);
  //   });
  // };

  // useEffect(() => {
  //   loadScript("https://checkout.razorpay.com/v1/checkout.js");
  // }, []);

  return (
    <>
      <Header />
      <AllRoutes />
    </>
  );
}

export default App;
