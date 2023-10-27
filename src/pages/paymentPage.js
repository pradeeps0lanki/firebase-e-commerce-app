import GlobalContext from "../context/gContext";
import { useContext } from "react";
import "./paymentPage.css";
import { useNavigate } from "react-router-dom";
import PaymentContext from "../context/payment";
import { toast } from "react-toastify";

import { db } from "../utils/firebase/firebaseUtils";
import { collection, addDoc } from "firebase/firestore";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cartTotal, cartItems, phoneNumber } = useContext(GlobalContext);
  const {
    name,
    setName,
    address,
    setAddress,
    pincode,
    setPincode,

    city,
    setCity,
    email,
    setEmail,
    nextButtonClick,
    setNextButtonClick,
  } = useContext(PaymentContext);

  const buyNow = async () => {
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const options = {
      key: "rzp_test_oQ3EEsQzVnFyJB",
      key_secret: "jhHlBRZFctNVvJUielULRosM",
      amount: parseInt(cartTotal + 70).toString() + "00",
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "E-Commerce",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        toast.success("Payment Successful", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email,

          paymentId,
        };

        try {
          const orderRef = collection(db, `orders/${phoneNumber}/allOrders/`);
          addDoc(orderRef, orderInfo);

          navigate("/");
        } catch (error) {
          alert("something went wrong");
        }
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePinCodeChange = (e) => {
    setPincode(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !city || !phoneNumber || !pincode || !email) {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setNextButtonClick(true);
  };

  return (
    <div>
      {nextButtonClick ? (
        <div className="bg-white dark:bg-gray-900">
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Confirmation and Payment
            </h2>
            <div className="mb-5 mr-2 flex justify-between">
              <p className="text-gray-700">Name</p>
              <p className="text-gray-700 ">{name}</p>
            </div>
            <div className="mb-2 flex   justify-between">
              <p className="text-gray-700">Address</p>
              <div className=" address">
                <p className="text-gray-700">{address}</p>
              </div>
            </div>
            <div className="mb-2 mr-2 flex justify-between">
              <p className="text-gray-700">Email</p>
              <p className="text-gray-700">{email}</p>
            </div>
            <div className="mb-2 mr-2 flex justify-between">
              <p className="text-gray-700">City</p>
              <p className="text-gray-700">{city}</p>
            </div>
            <div className="mb-2 mr-2 flex justify-between">
              <p className="text-gray-700">Pincode</p>
              <p className="text-gray-700">{pincode}</p>
            </div>

            <div className="mb-2 mr-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">₹{Math.floor(cartTotal)}</p>
            </div>
            <div className="flex mr-2 justify-between">
              <p className="text-gray-700">Shipping Charge</p>
              <p className="text-gray-700">₹{70}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold">Total</p>
              <div>
                <p className="mb-1 text-lg font-bold">
                  ₹{Math.floor(cartTotal + 70)}
                </p>
              </div>
            </div>
            <button
              onClick={buyNow}
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5 "
            >
              Go To Payment Options
            </button>
          </div>
        </div>
      ) : (
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              shipping address and contact details
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pincode
                  </label>
                  <input
                    type="number"
                    value={pincode}
                    onChange={handlePinCodeChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required=""
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default PaymentPage;
