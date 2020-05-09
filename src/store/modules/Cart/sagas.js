import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess, updateProductAmount } from './actions';

function* addToCart({ productId }) {
  const existingProduct = yield select((state) =>
    state.cart.find((product) => product.id === productId)
  );

  const stockReq = yield call(api.get, `/stock/${productId}`);
  const stockAmount = stockReq.data.amount || 0;
  const cartAmount = existingProduct ? existingProduct.amount : 0;
  const newCartAmount = cartAmount + 1;

  if (newCartAmount > stockAmount) {
    console.tron.log('AMOUNT ERROR');
    return;
  }

  if (!existingProduct) {
    const response = yield call(api.get, `/products/${productId}`);
    const productData = {
      ...response.data,
      amount: 1,
    };
    yield put(addToCartSuccess(productData));
  } else {
    yield put(updateProductAmount(existingProduct.id, newCartAmount));
  }
}
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
