import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase/firebaseUtils";
import { useEffect, useState } from "react";
import { OrderData } from "../components/OrderData";
import GlobalContext from "../context/gContext";
import { useContext } from "react";

const OrderDetail = () => {
  const { phoneNumber } = useContext(GlobalContext);
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderItems, setOrderItems] = useState([]);

  const getOrderDetails = async (phone) => {
    const orderRef = collection(db, `orders/${phone}/allOrders/`);
    const querySnapshot = await getDocs(orderRef);

    const ordersData = [];
    querySnapshot.forEach((doc) => {
      const order = doc.data();
      const { cartItems } = order;
      ordersData.push(...cartItems);
    });

    if (ordersData.length >= 1) {
      setOrderItems([...orderItems, ...ordersData]);
      console.log(orderItems);
      setOrderStatus(true);
    }
    return;
  };
  useEffect(() => {
    getOrderDetails(phoneNumber);
  }, []);

  return (
    <>
      {orderStatus ? (
        <div className="checkout-container">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Name</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
          </div>
          {orderItems.map((item) => {
            return <OrderData item={item} />;
          })}
        </div>
      ) : (
        <>
          <h1 className="text-center mt-7">you do not have any orders yet</h1>
        </>
      )}
    </>
  );
};

export default OrderDetail;
