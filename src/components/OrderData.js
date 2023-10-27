export const OrderData = ({ item }) => {
  const { name, quantity, price, image } = item;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="value">{quantity}</span>
      </span>
      <span className="price">₹{price}</span>
    </div>
  );
};
