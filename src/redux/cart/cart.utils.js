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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const exisitingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  //Removes the item from the CheckOut Page
  if (exisitingCartItems.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? //Decreases the quantity of the item within the CheckOut Page
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
