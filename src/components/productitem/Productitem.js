import React from "react";
import { Link } from "react-router-dom";

const Productitem = ({ product, showDetailsBtn }) => {
  return (
    <div className="product-item m-3 ">
      <div className="card">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text"> {product.description} </p>
          {showDetailsBtn && (
            <Link
              className="btn btn-primary mt-2"
              to={`/product/${product.id}`}
            >
              details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productitem;
