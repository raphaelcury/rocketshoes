import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import {
  addToCartSuccess,
  updateProductAmountRequest,
  updateProductAmountSuccess,
} from './actions';

function* checkStock(productId, amount) {
  const stockReq = yield call(api.get, `/stock/${productId}`);
  const stockAmount = stockReq.data.amount || 0;
  if (amount > stockAmount) {
    toast.error(
      'Não é possível alterar. Quantidade excede estoque disponível do produto'
    );
    return false;
  }
  return true;
}

function* addToCart({ productId }) {
  const existingProduct = yield select((state) =>
    state.cart.find((product) => product.id === productId)
  );
  if (!existingProduct) {
    if (!(yield call(checkStock, productId, 1))) {
      return;
    }
    const response = yield call(api.get, `/products/${productId}`);
    const productData = {
      ...response.data,
      amount: 1,
    };
    yield put(addToCartSuccess(productData));
  } else {
    yield put(
      updateProductAmountRequest(existingProduct.id, existingProduct.amount + 1)
    );
  }
}

function* updateProductAmount({ productId, amount }) {
  if (amount <= 0 || !(yield call(checkStock, productId, amount))) {
    return;
  }
  yield put(updateProductAmountSuccess(productId, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateProductAmount),
]);
