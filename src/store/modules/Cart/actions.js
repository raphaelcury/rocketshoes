// Saga Actions
export const addToCartRequest = (productId) => ({
  type: '@cart/ADD_REQUEST',
  productId,
});

export const addToCartSuccess = (product) => ({
  type: '@cart/ADD_SUCCESS',
  product,
});

// End Saga Actions

export const removeFromCart = (productId) => ({
  type: '@cart/REMOVE',
  productId,
});

export const updateProductAmount = (productId, amount) => ({
  type: '@cart/UPDATE_AMOUNT',
  productId,
  amount,
});
