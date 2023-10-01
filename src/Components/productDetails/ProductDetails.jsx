import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetails = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

    setProduct(data);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const renderedImages = product?.images.map((image, indx) => (
    <div key={indx} className="col-md-4 col-lg-2">
      <img src={image} className="w-100 h-250px" alt="product" />
    </div>
  ));
  console.log(id);
  if (!product) return <Spinner />
  return (
    <div className="container">
        <img src={product.thumbnail} alt="product" />
      <div className="row mb-5 mt-4 justify-content-center">{renderedImages}</div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
