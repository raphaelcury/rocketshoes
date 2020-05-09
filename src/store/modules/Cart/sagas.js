import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ productId }) {
  const response = yield call(api.get, `/products/${productId}`);
  yield put(addToCartSuccess(response.data));
}
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
