import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export default ({ itemGroup, onRemoveAll, onCountChange }) => {
  const { item, count } = itemGroup;
  const { name, price, discount } = item;

  const handleCountChange = amount => {
    const newCount = count + amount;
    newCount > 0 && onCountChange(itemGroup, newCount);
  };

  return (
    <div className="col card">
      <div className="row py-3">
        <img
          className="col-5 col-sm-2 img-fluid"
          src="https://picsum.photos/200/250"
          alt={name}
        />

        <div className="col-7 col-sm-10">
          <div className="row">
            <div className="col-sm-4">
              <p>{name}</p>
              <div>
                <strong>&#8377;{price.actual}</strong>
                &nbsp;&nbsp;<del className="text-muted">{price.display}</del>
                &nbsp;&nbsp;
                <strong className="text-success">{`${discount}% off`}</strong>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="input-group p-2">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    onClick={() => handleCountChange(-1)}
                  >
                    <FontAwesomeIcon icon={faMinusCircle} />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control text-center"
                  value={count}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    onClick={() => handleCountChange(1)}
                  >
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 my-1">
              <h5
                className="font-weight-bold"
                onClick={() => onRemoveAll(item)}
              >
                REMOVE
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
