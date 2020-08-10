import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/CustomButton";

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

const mapStateToProps = ({ cart: { CartItems } }) => ({
  CartItems,
});

export default connect(mapStateToProps)(CartDropdown);
