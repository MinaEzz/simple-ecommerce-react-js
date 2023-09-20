import React, { useEffect, useState } from "react";
import Productitem from "../productitem/Productitem";
import "./style.css";

const Productlist = () => {
  const api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  // get categories
  const categories = [
    "all",
    ...new Set(
      products.map((product) => {
        return product.category;
      })
    ),
  ];
  return (
    <section className="product-list pd-y-s">
      <h2 className="text-center">our products</h2>
      <div className="container mt-5">
        <ul className="categories d-flex justify-content-center align-items-center flex-wrap mb-5">
          {categories.map((category, index) => {
            return (
              <li className="cat btn btn-success m-2" key={index}>
                {category}
              </li>
            );
          })}
        </ul>
        <div className="products">
          <div className="row">
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <div
                    className="col col-lg-4 col-md-6 col-12"
                    key={product.id}
                  >
                    <Productitem product={product} showDetailsBtn={true} />
                  </div>
                );
              })
            ) : (
              <div className="alert alert-light text-center" role="alert">
                loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productlist;
