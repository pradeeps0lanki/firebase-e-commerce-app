import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GlobalContext from "../context/gContext";
import { useContext } from "react";

import Login from "../pages/registerUser";
import { Navigate } from "react-router-dom";

import About from "../pages/About";
import Products from "../pages/Products";
import SingleUser from "../pages/SingleUser";
import Cart from "../pages/Cart";

const AllRoutes = () => {
  const { login } = useContext(GlobalContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="signUP" element={<Login />} />

        <Route path="cart" element={<Cart />} />
        <Route
          path="user"
          element={login ? <SingleUser /> : <Navigate to="/" />}
        />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
