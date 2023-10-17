import "./checkOutItem.scss";
import GlobalContext from "../context/gContext";
import { useContext } from "react";

const CheckOutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(GlobalContext);

  const { name, image, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemToCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">₹{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;