export const addToCart = (product) => ({
  type: '@cart/ADD',
  product,
});

export const removeFromCart = (productId) => ({
  type: '@cart/REMOVE',
  productId,
});

export const updateProductAmount = (productId, amount) => ({
  type: '@cart/UPDATE_AMOUNT',
  productId,
  amount,
});
