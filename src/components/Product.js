import GlobalContext from "../context/gContext";
import { useContext } from "react";
import "./product.css";
import { Link } from "react-router-dom";
const Product = ({ products }) => {
  const { login } = useContext(GlobalContext);

  return (
    <>
      <div className="m-7  ">
        <Link to={`singleProduct/${products.id}`}>
          <div className=" parent p-3 flex flex-col items-center justify-between max-w-sm   bg-white border border-gray-200   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p>
              <img
                className="p-1 rounded-t-lg product-image "
                src={products.image}
                alt=""
              />
            </p>
            <div className="">
              <p>
                <h5 className="">{products.name}</h5>
              </p>

              <div className="flex items-center justify-between">
                <span className="">₹ {products.price}</span>
                {login === true ? (
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3">
                    Add
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
