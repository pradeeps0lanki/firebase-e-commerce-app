import GlobalContext from "../context/gContext";
import { useContext } from "react";
import "./checkout.scss";
import CheckOutItem from "../components/CheckOutItem";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(GlobalContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total : ₹ {Math.floor(cartTotal)}</span>
      {cartTotal > 0 && (
        <span className="total1">
          <Link to="/payment">
            <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              Go To payment
            </button>
          </Link>
        </span>
      )}
    </div>
  );
};

export default Checkout;
