import { createContext, useState } from "react";

const GlobalContext = createContext();

function Provider({ children }) {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const countryCode = "+91";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [existingUser, setExistingUser] = useState(false);
  const [account, setAccount] = useState(false);

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
  };

  return (
    <GlobalContext.Provider value={valueToShare}>
      {children}
    </GlobalContext.Provider>
  );
}

export { Provider };

export default GlobalContext;
