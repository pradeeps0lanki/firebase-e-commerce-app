import products from "../data/ProductsData";
import Product from "../components/Product";

const Products = () => {
  return (
    <main className="dark:bg-gray-900">
      <section className="max-w-7xl mx-auto pt-7">
      <div className="flex  flex-wrap  bg-gray-50 dark:bg-gray-900 justify-evenly">
        {products.map((singleProduct) => {
          return <Product key={singleProduct.id} products={singleProduct} />;
        })}
      </div>


      </section>
     
    </main>
  );
};

export default Products; 
