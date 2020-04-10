import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CartIcon from "./CartIcon";

function Header({ cartItemCount }) {
  return (
    <div className="row bg-primary py-3">
      <div className="col-2">
        <FontAwesomeIcon
          icon={faStar}
          size="3x"
          color="#fff"
          className="text-warning"
        />
      </div>
      <div className="col-8 text-right pt-2">
        <input
          type="text"
          className="bg-transparent border border-top-0 border-left-0 border-right-0 border-bottom-1 border-light"
        />
        <FontAwesomeIcon icon={faSearch} size="2x" color="#fff" />
      </div>
      <div className="col-2 pt-2">
        <CartIcon cartItemCount={cartItemCount} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    cartItemCount: state.cart.length
  };
};

export default connect(mapStateToProps)(Header);
