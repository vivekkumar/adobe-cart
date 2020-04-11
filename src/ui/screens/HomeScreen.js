import React from "react";
import { connect } from "react-redux";

import ShoppingItem from "../components/ShoppingItem";

import { getShoppingList } from "../../store/actions/shoppintListActions";
import { setSearchQuery } from "../../store/actions/searchActions";
import { addToCart } from "../../store/actions/cartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  componentDidMount() {
    this.props.getShpopingItems();
    this.props.resetSearch();
  }

  componentWillMount() {
    this.props.resetSearch();
  }

  addToCart = item => {
    this.props.addToCart(item);
  };

  render() {
    const { items, error, loading } = this.props;
    return (
      <>
        <div className="row text-center d-md-none">
          <div className="col-6 border-right py-2">
            <h4>
              <FontAwesomeIcon icon={faSort} className="mr-1" />
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
          <div className="col-md-3 col-lg-2 d-none d-md-block">
            Side bar filter
          </div>
          <div className="col-md-9 col-lg-10">
            <div className="row text-center  d-none d-md-block">
              <div className="col-6 border-right py-2">MD</div>
            </div>
            <div className="row">
              {items &&
                items.map((item, index) => (
                  <div
                    className="col-6 col-md-4 col-xl-2 border-top border-left pt-3"
                    key={index}
                  >
                    <ShoppingItem item={item} addToCart={this.addToCart} />
                  </div>
                ))}
            </div>

            {error && <div className="col-12 color-red">{error}</div>}
            {loading && <div className="col-12">{loading}</div>}
          </div>
        </div>
      </>
    );
  }
}

const getSearchedItems = (items, searchQuery) => {
  return items.filter(item => item.name.indexOf(searchQuery) > -1);
};

const mapStateToProps = state => {
  const { items, error, loading } = state.shoppingList;
  const { searchQuery } = state;
  return {
    items: getSearchedItems(items, searchQuery),
    error,
    loading,
    searchQuery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: cartItem => dispatch(addToCart(cartItem)),
    getShpopingItems: () => dispatch(getShoppingList()),
    resetSearch: () => dispatch(setSearchQuery(""))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
