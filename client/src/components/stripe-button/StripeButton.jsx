import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HHLFaGPijZ6AXROIydO5TkLnButqWqk0nUbBrgBXKzTU2YmNhCp04iUHdzsvw5Bsgx9Pg4tKT7mjkOyumUwVh3W00cgcMEqFP';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(() => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment.');
      });
  };

  return (
    <StripeCheckout
      token={onToken}
      label='Pay Now'
      name='RRG Clothing'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
      image='https://i.ibb.co/Jsxzw0x/letter-r-6.png'
      panelLabel='Pay Now'
    />
  );
};

export default StripeButton;
