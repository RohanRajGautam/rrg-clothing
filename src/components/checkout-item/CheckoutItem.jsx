import React from "react";
import { connect } from "react-redux";
import "./CheckoutItem.scss";

import { removeItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <span className='quantity'>{quantity}</span>
      <div className='remove-button' onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
