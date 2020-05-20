export function addToCartRequest(name) {
  return {
    type: '@cart/ADD_REQUEST',
    name,
  };
}
export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function clearCart() {
  return { type: '@cart/CLEAR' };
}

export function incrementItemRequest(id) {
  return { type: '@cart/INCREMENT_REQUEST', id };
}

export function incrementItemSuccess(id) {
  return { type: '@cart/INCREMENT_SUCCESS', id };
}

export function decrementItem(id) {
  return { type: '@cart/DECREMENT', id };
}
