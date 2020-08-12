export const addItemToCart = (CartItems, cartItemToAdd) => {
  const existingItem = CartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingItem) {
    return CartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...CartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (CartItems, cartItemToRemove) => {
  const existingItem = CartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return CartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return CartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
