import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productitem from "../productitem/Productitem";

const Productdetails = () => {
  const api = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${api}/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <section className="product-details pd-y">
      <h2 className="text-center mb-5">product details</h2>
      <Productitem product={product} showDetailsBtn={false} />
    </section>
  );
};

export default Productdetails;
