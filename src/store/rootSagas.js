import { all } from 'redux-saga/effects';

import authAdmin from './authAdmin/sagas';
import authStore from './authStore/sagas';
import cart from './cart/sagas';

export default function* rootSaga() {
  yield all([authAdmin, authStore, cart]);
}
