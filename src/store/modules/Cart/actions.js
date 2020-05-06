export const addToCart = (product) => ({
  type: '@cart/ADD',
  product,
});

export const removeFromCart = (productId) => ({
  type: '@cart/REMOVE',
  productId,
});
