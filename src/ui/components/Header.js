import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import CartIcon from "./CartIcon";
import Search from "./Search";

function Header({ cartItemCount }) {
  return (
    <div className="row bg-primary py-3">
      <div className="col-2 col-sm-1">
        <Link to="/">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            color="#fff"
            className="text-warning"
          />
        </Link>
      </div>
      <div className="col-8 col-sm-10 text-right pt-2">
        <Search />
      </div>
      <div className="col-2 col-sm-1 pt-2">
        <Link to="/cart">
          <CartIcon cartItemCount={cartItemCount} />
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartItemCount: state.cart.length
  };
};

export default connect(mapStateToProps)(Header);
