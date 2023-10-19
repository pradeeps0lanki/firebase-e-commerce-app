// import GlobalContext from "../context/gContext";
// import { useContext } from "react";
// import { Card } from "react-bootstrap";
import "./product.css";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

const Product = ({ products }) => {
  // const { login } = useContext(GlobalContext);

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
                <h5 className="product-title">{products.name}</h5>
              </p>

              <div className="flex items-center justify-between">
                <span className="">₹ {products.price}</span>
                
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
