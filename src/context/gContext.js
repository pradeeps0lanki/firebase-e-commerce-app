import { createContext, useEffect, useState } from "react";
import products from "../data/ProductsData";
import { addCollectionAndDocuments } from "../utils/firebase/firebaseUtils";
const GlobalContext = createContext();

function Provider({ children }) {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const countryCode = "+91";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [existingUser, setExistingUser] = useState(false);
  const [account, setAccount] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  useEffect(() => {
    addCollectionAndDocuments("categories", products);
  }, []);

  const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }

    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  };

  const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const valueToShare = {
    login,
    setLogin,
    userName,
    setUserName,

    phoneNumber,
    setPhoneNumber,
    existingUser,
    setExistingUser,
    countryCode,
    account,
    setAccount,
    addItemToCart,
    cartItems,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };

  return (
    <GlobalContext.Provider value={valueToShare}>
      {children}
    </GlobalContext.Provider>
  );
}

export { Provider };

export default GlobalContext;
