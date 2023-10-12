import { useParams } from "react-router-dom";
import products from "../data/ProductsData";
import "./singleProduct.css";
import GlobalContext from "../context/gContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const { login } = useContext(GlobalContext);
  const params = useParams();

  const arr = products.filter((prd) => {
    return prd.id === params.id;
  });

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className=" img rounded" src={arr[0].image} alt="" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg">
          <h1 className="text-4xl font-bold m-4 text-center lg:text-left">
            {arr[0].name}
          </h1>
          <p className="m-4">{arr[0].description}</p>
          <div className="flex flex-col  m-4">
            <p className="ml-2 text-gray-900">brand : {arr[0].brand}</p>
            <span className="text-gray-900 ml-2">price : ₹ {arr[0].price}</span>
          </div>
          {login === true ? (
            <div className="flex m-4">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3">
                Buy
              </button>
              <button onClick={()=>{toast.success('added to the cart')}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3">
                Add
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
