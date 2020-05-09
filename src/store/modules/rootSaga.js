import { all } from 'redux-saga/effects';

import cartSagas from './cart/sagas';

export default function* rootSaga() {
  return yield all([cartSagas]);
}
