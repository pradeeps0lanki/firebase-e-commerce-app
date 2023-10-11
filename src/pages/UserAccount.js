import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import GlobalContext from "../context/gContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const {
    userName,
    setUserName,

    phoneNumber,
    existingUser,
    account,
    setAccount,
  } = useContext(GlobalContext);
  const phoneSignNavigate = useNavigate();

  const db = getFirestore();

  const createUserDocumentFromAuth = async (useR) => {
    const userDocRef = doc(db, "user", useR);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          createdAt,
          userName,
          phoneNumber,
        });
      } catch (error) {
        console.log("error creating the user", error.message);
      }
    }

    return;
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    createUserDocumentFromAuth(phoneNumber);

    setAccount(true);
  };
  const handleAccountCreation = () => {
    phoneSignNavigate("/");
  };

  return (
    <>
      {account === false ? (
        <div>
          {existingUser === false ? (
            <form onSubmit={handleFormSubmit}>
              <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <div className="space-y-4 md:space-y-6">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          create account
                        </h1>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            enter a user name
                          </label>
                          <input
                            type="text"
                            onChange={handleUserNameChange}
                            value={userName}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          ) :null}
        </div>
      ) : (
        <div>
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <div className="space-y-4 md:space-y-6">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      logged in successfully
                    </h1>

                    <button
                      onClick={handleAccountCreation}
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      continue shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default UserAccount;
