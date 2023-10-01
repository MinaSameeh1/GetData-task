import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Spinner from "../Spinner";

const Home = () => {
  const [products, setProducts] = useState(null);

  async function getData() {
    let { data } = await axios.get("https://dummyjson.com/products");
    setProducts(data.products);

    console.log(products);
    // console.log(product[0].brand);
  }

  useEffect(() => {
    getData();
  }, []);
  
  let renderedProducts = products?.map((product, index) => (
    <ProductItem key={index} product={product} />
  ));
  console.log(products);

  if (!products)
    return <Spinner />

  return (
    <div className="container">
      <div className="row">

      {renderedProducts}
      </div>
    </div>
  );
};

export default Home;
