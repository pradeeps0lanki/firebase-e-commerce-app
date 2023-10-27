import "./product.css";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <>
      <Link to={`singleProduct/${products.id}`}>
        <div className="m-2 parent flex flex-col items-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg p-2  sm:h-64 product-image"
            src={products.image}
            alt=""
          />

          <div className="p-2 mt-4">
            <p className="   tracking-tight text-gray-900 dark:text-white">
              {products.name}
            </p>

            <p className="flex justify-between items-center mt-2">
              <span className=" dark:text-gray-200">
                <span>₹</span>
                <span>{products.price}</span>
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
