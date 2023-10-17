import './singleUser.scss';
import GlobalContext from "../context/gContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SingleUser = () => {
  const { phoneNumber, setAccount, setLogin, userName } =
    useContext(GlobalContext);
  const logout = useNavigate();

  const handleLogout = () => {
    setAccount(false);
    setLogin(false);

    logout("/");
  };

  return (
    <section className="cart-dropdown-container">
      {/* <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            your account
          </h2>
        </div>
        <div className="flex justify-center mt-4 mb-8 space-x-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
              alt="Bonnie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{userName}</p>
            </h3>
            <p>{phoneNumber}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          log out
        </button>
      </div> */}
      <div className="cart-items">
        <div className="mx-auto  max-w-screen-sm ">
          <p className=" tracking-tight mt-3 text-gray-900 dark:text-white">
            your account
          </p>
        </div>
        <div className="flex justify-center mt-4 mb-8 space-x-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-16 h-16 rounded-full"
              src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
              alt=""
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{userName}</p>
            </h3>
            <p>{phoneNumber}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          log out
        </button>
      </div>
    </section>
  );
};

export default SingleUser;
