import { createContext, useState } from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [nextButtonClick, setNextButtonClick] = useState(false); 

  const valueToShare = {
    name,
    setName,
    address,
    setAddress,
    pincode,
    setPincode,
    phoneNumber,
    setPhoneNumber,
    city,
    setCity,
    email,
    setEmail,
    nextButtonClick,
    setNextButtonClick
   
  };

  return (
    <PaymentContext.Provider value={valueToShare}>{children}</PaymentContext.Provider>
  );
};

export default PaymentContext;
