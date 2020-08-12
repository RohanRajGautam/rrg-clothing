import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/CustomButton";

import { selectCartItems } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";

import "./CartDropdown.scss";

const CartDropdown = ({ CartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {CartItems.length ? (
          CartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  CartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
