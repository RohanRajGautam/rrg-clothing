import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/CustomButton";

import { selectCartItems } from "../../redux/cart/cart-selector";

import "./CartDropdown.scss";

const CartDropdown = ({ CartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {CartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  CartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
