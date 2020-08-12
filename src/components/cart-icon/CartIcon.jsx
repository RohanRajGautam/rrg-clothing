import React from "react";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingIcon.svg";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
