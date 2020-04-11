import React from "react";

export default ({ item, addToCart }) => {
  const { name, price, discount } = item;
  return (
    <div>
      <div className="text-center">
        <img
          className="img-fluid"
          src="https://picsum.photos/200/250"
          alt={name}
        />
      </div>
      <p>{name}</p>
      <div className="row">
        <div className="col-6 pr-0">
          <span className="font-weight-bold">&#8377;{price.actual}</span>
          {"   "}
          <del className="text-muted">&#8377;{price.display}</del>
        </div>
        <div className="col-6 pl-0 font-weight-bold text-success text-right font">{`${discount}% off`}</div>
      </div>
      <div className="my-4 text-center">
        <button
          className="btn btn-large btn-warning rounded-pill font-weight-bold"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
