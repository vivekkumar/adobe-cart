import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../store/actions/cartActions";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import PriceDetails from "../components/PriceDetails";

import { groupCartItems } from "../../utils/commonHelpers";

class Cart extends React.Component {
  removeItemFromCart = item => {
    this.props.removeItem(item);
  };

  removeAll = item => {
    this.props.removeGroup(item);
  };

  addItemToCart = item => {
    this.props.addToCart(item);
  };

  updateCount = (groupItem, newCount) => {
    console.log(groupItem, newCount);
    if (groupItem.count < newCount) {
      this.addItemToCart(groupItem.item);
    } else if (groupItem.count > newCount) {
      this.removeItemFromCart(groupItem.item);
    }
  };

  render() {
    const { itemGroup } = this.props;
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-8">
            {itemGroup &&
              itemGroup.map((group, index) => (
                <div className="row mb-2" key={index}>
                  <CartItem
                    itemGroup={group}
                    onRemoveAll={this.removeAll}
                    onCountChange={this.updateCount}
                  />
                </div>
              ))}

            {itemGroup.length === 0 && (
              <div className="col text-center p-4">
                <h2 className="">No Items found!</h2>
                <Link to="/">Keep Shopping</Link>
              </div>
            )}
          </div>
          {itemGroup.length !== 0 && (
            <div className="col-md-4">
              <PriceDetails itemGroup={itemGroup} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemGroup: groupCartItems(state.cart)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: cartItem => dispatch(addToCart(cartItem)),
    removeItem: item => dispatch(removeFromCart(item)),
    removeGroup: item => dispatch(removeFromCart(item, true))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
