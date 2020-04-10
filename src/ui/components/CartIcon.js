import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default ({ cartItemCount }) => {
  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#fff" />
      {cartItemCount > 0 && (
        <span className="badge font-weight-normal badge-danger rounded-pill position-absolute ml-n2 mt-n2 cart-icon">
          {cartItemCount}
        </span>
      )}
    </>
  );
};
