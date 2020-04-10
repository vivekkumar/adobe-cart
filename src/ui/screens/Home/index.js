import React from "react";
import { connect } from "react-redux";

import ShoppingItem from "../../components/ShoppingItem";

import { getShoppingList } from "../../../store/actions/shoppintListActions";
import { addToCart } from "../../../store/actions/cartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  componentDidMount() {
    this.props.getShpopingItems();
  }

  addToCart = item => {
    this.props.addToCart(item);
  };

  render() {
    const { items, error, loading } = this.props;
    console.log("items", items);
    return (
      <>
        <div className="row text-center">
          <div className="col-6 border-right py-2">
            <h4>
              <FontAwesomeIcon icon={faSort} size="10px" className="mr-1" />
              <small>Sort</small>
            </h4>
          </div>
          <div className="col-6 py-2">
            <h4>
              <FontAwesomeIcon icon={faFilter} size="xs" className="mr-1" />
              <small>Filter</small>
            </h4>
          </div>
        </div>
        <div className="row border-right border-bottom">
          {items &&
            items.map((item, index) => (
              <ShoppingItem
                key={index}
                item={item}
                addToCart={this.addToCart}
              />
            ))}
          {error && <div className="col-12 color-red">{error}</div>}
          {loading && <div className="col-12">{loading}</div>}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { items, error, loading } = state.shoppingList;
  return {
    items,
    error,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: cartItem => dispatch(addToCart(cartItem)),
    getShpopingItems: () => dispatch(getShoppingList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
