import products from "../data/ProductsData";
import Product from "../components/Product";

import { useState } from "react";

const Products = () => {
  const [productsToShow, setProductToShow] = useState(products);

  const highestRated = () => {
    const arr = products.filter((item) => {
      return item.rating >= 4.5;
    });
    setProductToShow(arr);
  };

  const highToLow = () => {
    const arr1 = products.slice().sort((a, b) => {
      return b.price - a.price;
    });
    setProductToShow(arr1);
  };

  const lowToHigh = () => {
    const arr2 = products.slice().sort((a, b) => {
      return a.price - b.price;
    });
    setProductToShow(arr2);
  };

  return (
    <main className="dark:bg-gray-900">
      <section className="max-w-7xl mx-auto pt-7">
        <button
          onClick={lowToHigh}
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 m-2"
        >
          Show Low To High
        </button>

        <button
          onClick={highToLow}
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 m-2"
        >
          Show High To Low
        </button>

        <button
          onClick={highestRated}
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 m-2"
        >
          Show Highest Rated
        </button>

        <div className="flex  flex-wrap  bg-gray-50 dark:bg-gray-900 justify-evenly">
          {productsToShow.map((singleProduct) => {
            return <Product key={singleProduct.id} products={singleProduct} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Products;
