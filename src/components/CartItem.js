import "./cartItem.scss";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cart-item-container">
      <img className="img1" src={cartItem.image} alt="" />
      <div className="item-details">
        <span className="name">{cartItem.name}</span>
        <span className="price">
          {cartItem.quantity} × ₹{cartItem.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
