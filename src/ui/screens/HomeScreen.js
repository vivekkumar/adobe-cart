import React from "react";
import { connect } from "react-redux";

import { getShoppingList } from "../../store/actions/shoppintListActions";
import { setSearchQuery } from "../../store/actions/searchActions";
import { addToCart } from "../../store/actions/cartActions";
import { setSortOption } from "../../store/actions/sortActions";
import { setPriceRangeFilter } from "../../store/actions/filterActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ShoppingItem from "../components/ShoppingItem";
import Sort from "../components/Sort";
import RangeInput from "../components/RangeInput";
import Modal from "../components/Modal";

import { SortOptions, FilterOptions } from "../../config/appConfig";

import { getFilterdItems } from "../../utils/commonHelpers";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterModalShow: false,
      sortModalShow: false
    };
  }

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

  handleSort = sOption => {
    this.props.setSortOption(sOption);
    this.handleModelHide();
  };

  handleFilter = range => {
    this.props.setPriceRange(range);
    this.handleModelHide();
  };

  resetFilter = () => {
    this.props.setPriceRange(FilterOptions[0].range);
  };

  handleModelHide = () => {
    this.setState({ filterModalShow: false });
    this.setState({ sortModalShow: false });
  };

  showFilterModal = () => {
    this.setState({ filterModalShow: true });
  };

  showSortModal = () => {
    this.setState({ sortModalShow: true });
  };

  render() {
    const { items, error, loading, sort, filter } = this.props;
    const { filterModalShow, sortModalShow } = this.state;
    const currentFilterOption = FilterOptions[0];
    const { range } = currentFilterOption;
    const { priceRange } = filter;

    return (
      <div className="min-vh-100">
        <div className="row text-center d-md-none">
          <div className="col-6 border-right py-2">
            <h4 onClick={this.showSortModal}>
              <FontAwesomeIcon icon={faSort} className="mr-1" />
              <small>Sort</small>
            </h4>
          </div>
          <div className="col-6 py-2">
            <h4 onClick={this.showFilterModal}>
              <FontAwesomeIcon icon={faFilter} size="xs" className="mr-1" />
              <small>Filter</small>
            </h4>
          </div>
        </div>
        <div className="row border-right border-bottom">
          <div className="col-md-3 col-lg-2 d-none d-md-block">
            <div className="mt-4">
              <strong className="font-weight-bold">Filter</strong>
            </div>
            <RangeInput
              range={range}
              min={priceRange[0]}
              max={priceRange[1]}
              onApply={this.handleFilter}
              onCancel={this.resetFilter}
            />
          </div>
          <div className="col-md-9 col-lg-10 h-100 bg-light">
            <div className="row">
              <div className="col-12 d-none d-md-block border-right py-2">
                <Sort
                  sortOptions={SortOptions}
                  activeValue={sort.value}
                  handleSelection={this.handleSort}
                />
              </div>
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
            {items.length === 0 && !loading && (
              <h2 className="text-center w-100 bg-transparent">
                No items found!
              </h2>
            )}
            {error && <div className="col-12 color-red">{error}</div>}
            {loading && <div className="col-12">{loading}</div>}
          </div>
          <Modal
            show={filterModalShow}
            id="modal-filter"
            onHide={this.handleModelHide}
          >
            <RangeInput
              range={range}
              min={priceRange[0]}
              max={priceRange[1]}
              onApply={this.handleFilter}
              onCancel={this.handleModelHide}
            />
          </Modal>

          <Modal
            show={sortModalShow}
            id="model-sort"
            onHide={this.handleModelHide}
          >
            <Sort
              sortOptions={SortOptions}
              activeValue={sort.value}
              handleSelection={this.handleSort}
              onCancel={this.handleModelHide}
              onApply={this.handleSort}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { shoppingList, searchQuery, sort, filter } = state;
  const { items, error, loading } = shoppingList;

  return {
    items: getFilterdItems(items, { searchQuery, sort, filter }),
    error,
    loading,
    searchQuery,
    sort,
    filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: cartItem => dispatch(addToCart(cartItem)),
    getShpopingItems: () => dispatch(getShoppingList()),
    resetSearch: () => dispatch(setSearchQuery("")),
    setSortOption: sOption => dispatch(setSortOption(sOption)),
    setPriceRange: range => dispatch(setPriceRangeFilter(range))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
