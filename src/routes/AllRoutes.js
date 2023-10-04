import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "./sign-in/signIn";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signIn" element={<SignIn/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
