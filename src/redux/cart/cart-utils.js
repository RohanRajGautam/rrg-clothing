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
