// Saga Actions
export const addToCartRequest = (productId) => ({
  type: '@cart/ADD_REQUEST',
  productId,
});

export const addToCartSuccess = (product) => ({
  type: '@cart/ADD_SUCCESS',
  product,
});

export const updateProductAmountRequest = (productId, amount) => ({
  type: '@cart/UPDATE_AMOUNT_REQUEST',
  productId,
  amount,
});

export const updateProductAmountSuccess = (productId, amount) => ({
  type: '@cart/UPDATE_AMOUNT_SUCCESS',
  productId,
  amount,
});

// End Saga Actions

export const removeFromCart = (productId) => ({
  type: '@cart/REMOVE',
  productId,
});
