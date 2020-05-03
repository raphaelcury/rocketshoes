export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newCart = [...state];
      const productIndex = state.findIndex(
        (product) => product.id === action.product.id
      );
      if (productIndex >= 0) {
        newCart[productIndex].amount += 1;
      } else {
        newCart.push({
          ...action.product,
          amount: 1,
        });
      }
      return newCart;
    }
    default:
      return state;
  }
}
