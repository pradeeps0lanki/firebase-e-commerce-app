import { useContext, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from "../utils/firebase/firebaseUtils";
import GlobalContext from "../context/gContext";

import UserAccount from "./UserAccount";

const Login = () => {
  const { phoneNumber, setPhoneNumber, setAccount, setUserName } =
    useContext(GlobalContext);

  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState("");
  const { login, setLogin, setExistingUser } = useContext(GlobalContext);

  const db = getFirestore();

  // const createUserDocumentFromAuth = async (useR) => {
  //   const userDocRef = doc(db, "user", useR);

  //   const userSnapshot = await getDoc(userDocRef);

  //   if (userSnapshot.exists()) {
  //     const { userName } = userSnapshot.data();
  //     setUserName(userName);

  //     setExistingUser(true);
  //     setAccount(true);
  //   }

  //   return;
  // };
  const confirmUserDocumentFromAuth = async (useR) => {
    const userDocRef = doc(db, "user", useR);

    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
      const { phoneNumber, userName } = userSnapshot.data();
      if (phoneNumber) {
        setUserName(userName);
        setLogin(true);
        setExistingUser(true);
        setAccount(true);
      }
    } else {
      
      generateReCaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setExpandForm(true);
        })
        .catch(() => alert("something went wrong"));
    }

    return;
  };

  const generateReCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      authentication,
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {},
      }
    );
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const phoneAuth = (e) => {
    e.preventDefault();
    confirmUserDocumentFromAuth(phoneNumber);

    // if (phoneNumber.length >= 12) {
    //   // createUserDocumentFromAuth(phoneNumber);
    //   generateReCaptcha();
    //   let appVerifier = window.recaptchaVerifier;
    //   signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
    //     .then((confirmationResult) => {
    //       window.confirmationResult = confirmationResult;
    //       setExpandForm(true);
    //     })
    //     .catch(() => alert("something went wrong"));
    // } else {
    //   alert("wrong phone number");
    // }
  };

  const handleOtpChange = (e) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // const user = result.user;

          // if (user.phoneNumber === phoneNumber) {
          //   createUserDocumentFromAuth(phoneNumber);
          // }

          setLogin(true);
        })
        .catch((error) => {
          alert("something went wrong");
        });
    }
  };

  return (
    <>
      {login === true ? (
        <UserAccount />
      ) : (
        <>
          <div classNameName="mt-0">
            <section className="bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form
                      onSubmit={phoneAuth}
                      className="space-y-4 md:space-y-6"
                    >
                      {expandForm === false ? (
                        <>
                          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create/Login in your account
                          </h1>
                          <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              enter your phone number
                            </label>
                            <input
                              type="tel"
                              value={phoneNumber}
                              maxLength={13}
                              onChange={handlePhoneNumberChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required=""
                            />
                          </div>
                          <button
                            type="submit"
                            id="sign-in-button"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            Next
                          </button>
                        </>
                      ) : (
                        <>
                          <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Enter OTP
                            </label>
                            <input
                              type="number"
                              value={OTP}
                              onChange={handleOtpChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required=""
                            />
                          </div>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
