export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (exisitingCartItems) {
    //Note: .map() function returns a new array needed for the state.
    //Redux requires new versions of our state so that our components know when to re-render.
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
