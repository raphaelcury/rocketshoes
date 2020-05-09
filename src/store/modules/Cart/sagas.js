import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess, updateProductAmount } from './actions';

function* addToCart({ productId }) {
  const existingProduct = yield select((state) =>
    state.cart.find((product) => product.id === productId)
  );
  if (!existingProduct) {
    const response = yield call(api.get, `/products/${productId}`);
    const productData = {
      ...response.data,
      amount: 1,
    };
    yield put(addToCartSuccess(productData));
  } else {
    yield put(
      updateProductAmount(existingProduct.id, existingProduct.amount + 1)
    );
  }
}
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
